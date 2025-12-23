/** @format */
import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const getSupabaseConfig = () => ({
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
})

export async function POST(request: Request) {
  try {
    const { url, serviceKey } = getSupabaseConfig()

    // 1. ตรวจสอบ Config
    if (!url || !serviceKey) {
      console.error("❌ [Config Error]: Missing Supabase Credentials")
      return NextResponse.json(
        { error: "Internal Server Configuration Error" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const {
      name,
      phone,
      businessType,
      budget,
      templateId,
      source_url,
      metadata,
    } = body

    // 2. Validation ขั้นต่ำตาม Schema (NOT NULL)
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    const supabase = createClient(url, serviceKey)

    // 3. Mapping ข้อมูลให้ตรงกับ Schema ใน Supabase (leads table)
    const leadData = {
      name: name,
      phone: phone || null,
      category: businessType || "not_specified",
      template_id: templateId || "main",
      source_url: source_url || "",
      // นำ budget ไปรวมไว้ใน message ตามโครงสร้างตารางที่ไม่มีฟิลด์ budget
      message: budget ? `Budget Plan: ${budget}` : "No message provided",
      metadata: metadata || {},
      status: "new",
    }

    // 4. บันทึกข้อมูล
    const { data, error } = await supabase
      .from("leads")
      .insert([leadData])
      .select()
      .single()

    if (error) {
      console.error("❌ [Supabase Error]:", error.message)
      return NextResponse.json(
        { error: "Database rejection", details: error.message },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { success: true, leadId: data.id },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("❌ [Runtime Error]:", error.message)
    return NextResponse.json(
      { error: "Critical Server Error", message: error.message },
      { status: 500 }
    )
  }
}
