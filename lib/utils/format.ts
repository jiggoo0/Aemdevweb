/** @format */

/**
 * แปลงเบอร์โทรศัพท์เป็นลิงก์ tel: (เช่น 0812345678 -> tel:0812345678)
 */
export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/[^0-9]/g, "")}`;
}

/**
 * จัดรูปแบบราคาให้มีลูกน้ำ (เช่น 1990 -> 1,990)
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("th-TH", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(price);
}
