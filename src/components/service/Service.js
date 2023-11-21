import Link from 'next/link'
import React from 'react'
import Banner from './Banner'
import Product from './Product'
import ProductItem from './ProductItem'

function Service({ lang, data, dataCate }) {
    return (
        <>
            <Banner data={data?.product?.banner} />
            <main>
                <Product lang={lang} data={data?.product?.content} dataCate={dataCate} />
                {/* Product items */}

                <div className='md:grid grid-cols-4 md:gap-x-[2.6rem] md:gap-y-[2.45rem] md:px-[4.17rem]  md:pb-[13.23rem]'>
                    {dataCate?.map((item, index) => (
                        <Link href={`/${lang}/service-products/${item?.product_category?.info?.featureProduct}`} key={index}>
                            <ProductItem image={item?.product_category?.info?.image} text={item?.product_category?.info?.title} />
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Service
