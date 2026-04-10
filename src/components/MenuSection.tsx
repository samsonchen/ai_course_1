import type { MenuItem, Category } from '../types/menu'
import { MenuCard } from './MenuCard'
import { useLanguage } from '../hooks/useLanguage'
import { CATEGORY_LABELS, CATEGORY_EMOJIS } from '../data/site-info'

export function MenuSection({ category, items, onOpenItem }: { category: Category; items: MenuItem[]; onOpenItem: (item: MenuItem) => void }) {
  const { lang } = useLanguage()
  const emoji = CATEGORY_EMOJIS[category]
  return (
    <section id={category} className="py-5 px-4 bg-bg-page">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-6 bg-gold rounded-full flex-shrink-0" />
        <h2 className="font-noto text-xl font-bold text-text-primary">{CATEGORY_LABELS[category][lang]}</h2>
        {emoji && <span className="text-lg">{emoji}</span>}
      </div>
      <div className="space-y-3">
        {items.map((item) => <MenuCard key={item.id} item={item} onOpen={onOpenItem} />)}
      </div>
    </section>
  )
}
