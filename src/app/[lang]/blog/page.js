import Blog from '@/components/blogs/Blog'
import React from 'react'

function page({ params: { lang } }) {
  return (
    <Blog lang={lang} />
  )
}

export default page