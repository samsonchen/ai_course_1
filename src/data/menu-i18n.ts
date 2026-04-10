import type { MenuItem } from '../types/menu'

const empty = { zh: '', en: '', ja: '', ko: '' }

export const menuItems: MenuItem[] = [
  {
    id: 'main-001', category: 'main',
    names: { zh: '手作泰式紅咖哩', en: 'Handmade Thai Red Curry', ja: '手作りタイレッドカレー', ko: '수제 태국 레드커리' },
    price: [
      { label: { zh: '烤雞腿', en: 'Roast Chicken', ja: 'ローストチキン', ko: '로스트치킨' }, value: 270 },
      { label: { zh: '牛肉', en: 'Beef', ja: '牛肉', ko: '소고기' }, value: 340 },
      { label: { zh: '蔬食', en: 'Veggie', ja: 'ベジタリアン', ko: '채식' }, value: 250 },
    ],
    image: '紅咖哩雞腿.jpeg', emoji: '🍛', tags: ['R', '1', 'B'], desc: empty, note: empty,
  },
  {
    id: 'main-002', category: 'main',
    names: { zh: '手作泰式黃咖哩（微辣）', en: 'Handmade Thai Yellow Curry (Mild)', ja: '手作りタイイエローカレー（甘口）', ko: '수제 태국 옐로우커리 (약간 매운)' },
    price: [
      { label: { zh: '烤雞腿', en: 'Roast Chicken', ja: 'ローストチキン', ko: '로스트치킨' }, value: 250 },
      { label: { zh: '牛肉', en: 'Beef', ja: '牛肉', ko: '소고기' }, value: 320 },
      { label: { zh: '蔬食', en: 'Veggie', ja: 'ベジタリアン', ko: '채식' }, value: 230 },
    ],
    image: null, emoji: '🍛', tags: ['1', 'B'], desc: empty, note: empty,
  },
  {
    id: 'main-003', category: 'main',
    names: { zh: '泰式檸檬蒸鱸魚', en: 'Thai Steamed Sea Bass with Lemon Sauce', ja: 'タイ風レモン蒸し鱸', ko: '태국식 레몬 찜 농어' },
    price: [
      { label: { zh: '整尾', en: 'Whole Fish', ja: '一尾', ko: '한마리' }, value: 400 },
      { label: { zh: '半尾', en: 'Half Fish', ja: '半尾', ko: '반마리' }, value: 240 },
    ],
    image: null, emoji: '🐟', tags: [], desc: empty, note: empty,
  },
  {
    id: 'main-004', category: 'main',
    names: { zh: '酥炸無骨海鱸佐羅望子醬（不辣）', en: 'Crispy Boneless Sea Bass with Tamarind Sauce', ja: '骨なしスズキの揚げ物 タマリンドソース', ko: '바삭한 뼈없는 농어 타마린드소스' },
    price: [
      { label: { zh: '整尾', en: 'Whole Fish', ja: '一尾', ko: '한마리' }, value: 430 },
      { label: { zh: '半尾', en: 'Half Fish', ja: '半尾', ko: '반마리' }, value: 240 },
    ],
    image: null, emoji: '🐟', tags: ['R'], desc: empty, note: empty,
  },
  {
    id: 'main-005', category: 'main',
    names: { zh: '冬蔭功酸辣海鮮湯', en: 'Tom Yum Seafood Soup', ja: 'トムヤムクン シーフードスープ', ko: '똠얌꿍 해물 수프' },
    price: [
      { label: { zh: '小', en: 'Small', ja: '小', ko: '작은' }, value: 270 },
      { label: { zh: '大', en: 'Large', ja: '大', ko: '큰' }, value: 510 },
    ],
    image: null, emoji: '🍲', tags: ['3'], desc: empty, note: empty,
  },
  {
    id: 'main-006', category: 'main',
    names: { zh: '南薑香茅椰奶雞湯（不辣）', en: 'Galangal Lemongrass Coconut Chicken Soup', ja: 'ガランガルとレモングラスのココナツチキンスープ', ko: '갈랑갈 레몬그라스 코코넛 치킨 수프' },
    price: [
      { label: { zh: '小', en: 'Small', ja: '小', ko: '작은' }, value: 250 },
      { label: { zh: '大', en: 'Large', ja: '大', ko: '큰' }, value: 460 },
    ],
    image: null, emoji: '🍲', tags: [], desc: empty, note: empty,
  },
  {
    id: 'side-001', category: 'side',
    names: { zh: '月亮蝦餅佐手工甜雞醬', en: 'Moon Shrimp Cake with Sweet Chili Sauce', ja: '月の海老餅・手作り甘辛ソース', ko: '새우 케이크 수제 스위트칠리소스' },
    price: [
      { label: { zh: '大 8片', en: 'Large (8 pcs)', ja: '大 8枚', ko: '대 8조각' }, value: 310 },
      { label: { zh: '小 4片', en: 'Small (4 pcs)', ja: '小 4枚', ko: '소 4조각' }, value: 170 },
    ],
    image: '月亮蝦餅.jpeg', emoji: '🥟', tags: ['R'], desc: empty, note: empty,
  },
  {
    id: 'side-002', category: 'side',
    names: { zh: '泰式炸雞佐羅望子醬（不辣）', en: 'Thai Fried Chicken with Tamarind Sauce', ja: 'タイ風フライドチキン タマリンドソース', ko: '태국식 프라이드치킨 타마린드소스' },
    price: [{ label: null, value: 220 }],
    image: null, emoji: '🍗', tags: [], desc: empty, note: empty,
  },
  {
    id: 'side-003', category: 'side',
    names: { zh: '炸豆腐佐手工酸甜醬', en: 'Fried Tofu with Sweet & Sour Sauce', ja: '揚げ豆腐・手作り甘酢ソース', ko: '두부튀김 수제 새콤달콤소스' },
    price: [{ label: null, value: 95 }],
    image: '炸豆腐.jpeg', emoji: '🧈', tags: ['V'], desc: empty, note: empty,
  },
  {
    id: 'side-004', category: 'side',
    names: { zh: '泰式女婿蛋', en: 'Thai Son-in-Law Eggs', ja: 'タイ風女婿の卵', ko: '태국식 사위달걀' },
    price: [{ label: null, value: 95 }],
    image: null, emoji: '🥚', tags: ['V'], desc: empty, note: empty,
  },
  {
    id: 'side-005', category: 'side',
    names: { zh: '豆醬高麗菜', en: 'Cabbage in Bean Sauce', ja: '豆醤キャベツ炒め', ko: '된장 양배추 볶음' },
    price: [
      { label: { zh: '大', en: 'Large', ja: '大', ko: '큰' }, value: 180 },
      { label: { zh: '小', en: 'Small', ja: '小', ko: '작은' }, value: 100 },
    ],
    image: null, emoji: '🥬', tags: ['V'], desc: empty, note: empty,
  },
  {
    id: 'side-006', category: 'side',
    names: { zh: '蝦醬高麗菜', en: 'Cabbage in Shrimp Paste', ja: 'エビ醤キャベツ炒め', ko: '새우젓 양배추 볶음' },
    price: [
      { label: { zh: '大', en: 'Large', ja: '大', ko: '큰' }, value: 180 },
      { label: { zh: '小', en: 'Small', ja: '小', ko: '작은' }, value: 100 },
    ],
    image: null, emoji: '🥬', tags: [], desc: empty, note: empty,
  },
  {
    id: 'side-007', category: 'side',
    names: { zh: '泰式涼拌沙拉', en: 'Thai Cold Salad', ja: 'タイ風サラダ', ko: '태국식 냉채 샐러드' },
    price: [
      { label: { zh: '大', en: 'Large', ja: '大', ko: '큰' }, value: 170 },
      { label: { zh: '小', en: 'Small', ja: '小', ko: '작은' }, value: 100 },
    ],
    image: null, emoji: '🥗', tags: ['V'], desc: empty, note: empty,
  },
  {
    id: 'side-008', category: 'side',
    names: { zh: '泰國茉莉香米', en: 'Thai Jasmine Rice', ja: 'タイジャスミンライス', ko: '태국 자스민 쌀' },
    price: [{ label: null, value: 20 }],
    image: null, emoji: '🍚', tags: ['V'], desc: empty,
    note: { zh: '一碗', en: 'Per bowl', ja: '1杯', ko: '1그릇' },
  },
  {
    id: 'dessert-001', category: 'dessert',
    names: { zh: '焦糖糯米炸香蕉', en: 'Caramelized Sticky Rice Fried Banana', ja: '焦がしもち米揚げバナナ', ko: '캐러멜 찹쌀 바나나 튀김' },
    price: [{ label: null, value: 50 }],
    image: null, emoji: '🍌', tags: ['V'], desc: empty,
    note: { zh: '一份', en: 'Per serving', ja: '1人前', ko: '1인분' },
  },
  {
    id: 'dessert-002', category: 'dessert',
    names: { zh: '椰汁西米露', en: 'Coconut Milk Sago', ja: 'ここナッツミルクのサゴ', ko: '코코넛 밀크 사고' },
    price: [{ label: null, value: 30 }],
    image: null, emoji: '🥥', tags: ['V'], desc: empty,
    note: { zh: '一杯', en: 'Per cup', ja: '1杯', ko: '1잔' },
  },
  {
    id: 'drink-001', category: 'drink',
    names: { zh: '泰式奶茶', en: 'Thai Milk Tea', ja: 'タイミルクティー', ko: '태국 밀크티' },
    price: [
      { label: { zh: '杯', en: 'Cup', ja: 'カップ', ko: '컵' }, value: 70 },
      { label: { zh: '壺', en: 'Pot', ja: 'ポット', ko: '포트' }, value: 160 },
    ],
    image: null, emoji: '🧋', tags: [], desc: empty, note: empty,
  },
  {
    id: 'drink-002', category: 'drink',
    names: { zh: '山竹汁', en: 'Mangosteen Juice', ja: 'マンゴスチンジュース', ko: '망고스틴 주스' },
    price: [
      { label: { zh: '杯', en: 'Cup', ja: 'カップ', ko: '컵' }, value: 70 },
      { label: { zh: '壺', en: 'Pot', ja: 'ポット', ko: '포트' }, value: 160 },
    ],
    image: null, emoji: '🧃', tags: [], desc: empty, note: empty,
  },
  {
    id: 'drink-003', category: 'drink',
    names: { zh: '羅望子汁', en: 'Tamarind Juice', ja: 'タマリンドジュース', ko: '타마린드 주스' },
    price: [
      { label: { zh: '杯', en: 'Cup', ja: 'カップ', ko: '컵' }, value: 70 },
      { label: { zh: '壺', en: 'Pot', ja: 'ポット', ko: '포트' }, value: 160 },
    ],
    image: null, emoji: '🧃', tags: [], desc: empty, note: empty,
  },
  {
    id: 'drink-004', category: 'drink',
    names: { zh: '椰子汁', en: 'Coconut Juice', ja: 'ここナッツジュース', ko: '코코넛 주스' },
    price: [
      { label: { zh: '杯', en: 'Cup', ja: 'カップ', ko: '컵' }, value: 70 },
      { label: { zh: '壺', en: 'Pot', ja: 'ポット', ko: '포트' }, value: 160 },
    ],
    image: null, emoji: '🥥', tags: [], desc: empty, note: empty,
  },
  {
    id: 'drink-005', category: 'drink',
    names: { zh: '泰國啤酒（聖獅／大象 330ml）', en: 'Thai Beer (Singha / Chang 330ml)', ja: 'タイビール（シンハー／チャーン 330ml）', ko: '태국 맥주 (싱하/창 330ml)' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🍺', tags: [], desc: empty,
    note: { zh: '瓶裝', en: 'Bottled', ja: 'ボトル入り', ko: '병입' },
  },
]
