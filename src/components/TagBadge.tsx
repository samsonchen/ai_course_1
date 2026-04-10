import { TAGS } from '../data/tags'
import { useLanguage } from '../hooks/useLanguage'
import type { TagCode } from '../types/menu'

function getTagColor(code: TagCode): string {
  switch (code) {
    case 'R': return 'bg-gold text-white'
    case '1': case '2': case '3': return 'bg-spicy-red text-white'
    case 'V': return 'bg-veg-green-bg text-veg-green font-medium'
    case 'P': case 'B': case 'L': return 'bg-meat-brown text-white'
    case 'H': return 'bg-[#1B5E20] text-white'
  }
}

export function TagBadge({ code }: { code: TagCode }) {
  const { lang } = useLanguage()
  const tag = TAGS[code]
  return (
    <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-pill text-[10px] font-semibold whitespace-nowrap ${getTagColor(code)}`}>
      <span>{tag.icon}</span>
      <span>{tag.label[lang]}</span>
    </span>
  )
}
