"use server";

import { resend } from "@/lib/resend";
import { ConsultationEmail } from "@/components/email/ConsultationEmail";
import { consultationSchema } from "@/lib/schemas/consultation";
import { SITE_CONFIG } from "@/constants/site-config";

export async function submitConsultation(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const validated = consultationSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "AEMDEVWEB <noreply@aemdevweb.com>",
      to: [SITE_CONFIG.contact.email],
      subject: `New Consultation Request from ${validated.data.name}`,
      react: <ConsultationEmail {...validated.data} />,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, message: "Failed to send email" };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Action Error:", err);
    return { success: false, message: "Something went wrong" };
  }
}
