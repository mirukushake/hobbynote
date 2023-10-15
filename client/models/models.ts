export interface Floss {
  item_id: number
  code: string
  floss_name: Name
  brand: Brand
  order: number
  color: number
  background: string
  inv_qty: number
  wish_qty: number
}

export interface Watercolor {
  item_id: number
  code: string
  swatch: string
  paint_name: Name
  brand: Brand
  color_id: number
  sizes: null | number[]
  order: number
  grade: string
  inv_qty: number
  wish_qty: number
  color: number | null
  pigments: Pigment[]
}

export interface Pigment {
  id: number
  code: string
  name: string
  order: number
}

export interface Brand {
  id: number
  country_id: number
  brand_name: Name
}

export interface Name {
  en: string
  ja: string
}
