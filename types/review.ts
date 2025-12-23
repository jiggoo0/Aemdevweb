/** @format */
export interface ReviewItem {
  id: string
  name: string
  avatar: string
  businessType: string
  category: "cafe" | "clinic" | "construction" | "real-estate" | "other"
  comment: string
  rating: number
  date: string
  isFeatured: boolean
}
