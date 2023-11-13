import IndexBlogDetail from '@/components/blogs/blog-detail/IndexBlogDetail'
import getDataDetail from '@/data/getDataDetail'
import { GET_DATA_NEWS_DETAIL } from '@/graphql/news-blog/query';
import React from 'react'

export default async function page({ params: { lang,slug } }) {
    let data
    data = await getDataDetail(lang,slug,GET_DATA_NEWS_DETAIL)
    const dataDetail = data?.data?.post?.translation
    return (
        <IndexBlogDetail lang={lang} data={dataDetail} />
    )
}

 
