/** @format */

/**
 * ✅ แก้ไขปัญหา Lint: Assign object to a variable before exporting
 * กฎ: import/no-anonymous-default-export
 */
const postcssConfig = {
  plugins: {
    // ✅ ใช้ปลั๊กอินใหม่สำหรับ Tailwind CSS v4 ตามที่พี่อัปเดต
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}

export default postcssConfig
