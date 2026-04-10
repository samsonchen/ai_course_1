export type Lang = 'zh' | 'en' | 'ja' | 'ko'
export type I18nStr = Record<Lang, string>
export type Category = 'main' | 'side' | 'dessert' | 'drink'
export type TagCode = 'R' | '1' | '2' | '3' | 'P' | 'B' | 'L' | 'V' | 'H'

export interface PriceOption {
  label: I18nStr | null
  value: number | 'market'
}

export interface MenuItem {
  id: string
  category: Category
  names: I18nStr
  price: PriceOption[]
  image: string | null
  emoji: string
  tags: TagCode[]
  desc: I18nStr
  note: I18nStr
}
