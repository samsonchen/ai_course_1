import type { MenuItem } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'
import { TagBadge } from './TagBadge'
import { MARKET_PRICE } from '../data/site-info'

export function MenuCard({ item, onOpen }: { item: MenuItem; onOpen: (item: MenuItem) => void }) {
  const { lang } = useLanguage()
  return (
    <div className="bg-white rounded-card p-4 flex gap-3 cursor-pointer active:bg-gray-50 border border-[#F0F0F0]" onClick={() => onOpen(item)}>
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-emoji-bg flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img src={`${import.meta.env.BASE_URL}images/${item.image}`} alt={item.names[lang]} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <span className="text-2xl">{item.emoji}</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-noto font-semibold text-[15px] text-text-primary mb-1.5 leading-snug">{item.names[lang]}</h3>
        <div className="space-y-0.5 mb-2">
          {item.price.map((opt, i) => (
            <div key={i} className="flex justify-between items-center">
              {opt.label && <span className="text-text-secondary text-sm">{opt.label[lang]}</span>}
              <span className="text-gold font-semibold text-sm ml-auto">
                {opt.value === 'market' ? MARKET_PRICE[lang] : `NT$${opt.value}`}
              </span>
            </div>
          ))}
        </div>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag) => <TagBadge key={tag} code={tag} />)}
          </div>
        )}
      </div>
    </div>
  )
}
