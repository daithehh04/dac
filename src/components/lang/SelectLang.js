'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '../../../i18n-config'
import { useState } from 'react'

function SelectLang({ lang,checkHome }) {
  const pathName = usePathname()
  const [lng, setLng] = useState(lang)
  const redirectedPathName = (locale) => {
    if (!pathName) return `/${currentLang}`
    const segments = pathName.split('/')
    if (segments[1] !== 'it' && segments[1] !== 'en' && segments[1] !== 'fr') {
      segments.splice(1, 0, locale)
      return segments.join('/')
    }
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='flex items-center select-lang'>
      {i18n?.lo?.map((locale, index) => (
          <Link
            onClick={() => setLng(locale.locale)}
            key={index}
            href={redirectedPathName(locale.locale)}
            className={`flex link items-center w-full border-r border-solid border-[#fff] last:border-none px-[0.6vw] ${checkHome ? 'border-black' : ''} ${lng === locale.locale ? 'active' : ''}`}
          >
            <span className={`uppercase text-[1vw] text-white ${checkHome ? 'text-black' : ''}`}>{locale.locale}</span>
          </Link>
        ))}
    </div>
  )
}

export default SelectLang
