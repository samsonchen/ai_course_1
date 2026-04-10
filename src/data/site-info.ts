import type { Lang, I18nStr, Category } from '../types/menu'

export const RESTAURANT_NAME: I18nStr = {
  zh: '香茅廚房',
  en: 'Lemongrass Kitchen',
  ja: 'レモングラスキッチン',
  ko: '레몬그라스 키친',
}

export const DINING_INFO: I18nStr = {
  zh: '用餐時間限 90 分鐘 ｜ 每人最低消費 NT$300',
  en: '90-minute dining limit ｜ NT$300 minimum per person',
  ja: '食事時間90分まで ｜ お一人様NT$300以上',
  ko: '식사 시간 90분 제한 ｜ 1인 최소 NT$300',
}

export const LANG_LABELS: Record<Lang, string> = {
  zh: '繁中',
  en: 'EN',
  ja: '日本語',
  ko: '한국어',
}

export const CATEGORY_LABELS: Record<Category, I18nStr> = {
  main: { zh: '主餐類', en: 'Mains', ja: 'メインディッシュ', ko: '메인요리' },
  side: { zh: '單點類', en: 'Sides', ja: 'サイドメニュー', ko: '사이드메뉴' },
  dessert: { zh: '甜點類', en: 'Desserts', ja: 'デザート', ko: '디저트' },
  drink: { zh: '飲料類', en: 'Drinks', ja: 'ドリンク', ko: '음료' },
}

export const CATEGORY_EMOJIS: Record<Category, string> = {
  main: '',
  side: '',
  dessert: '🍮',
  drink: '🥤',
}

export const MARKET_PRICE: I18nStr = {
  zh: '時價',
  en: 'Market Price',
  ja: '時価',
  ko: '시가',
}

export const PRICE_OPTIONS_LABEL: I18nStr = {
  zh: '價格選項',
  en: 'Price Options',
  ja: '価格オプション',
  ko: '가격 옵션',
}

export const CATEGORIES: Category[] = ['main', 'side', 'dessert', 'drink']
