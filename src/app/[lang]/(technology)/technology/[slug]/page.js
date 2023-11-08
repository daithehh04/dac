'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import IndexGravure from '@/components/technology/technology-gravure/IndexGravure';
import IndexOffset from '@/components/technology/technology-offset/IndexOffset';
import IndexFlexo from '@/components/technology/technology-flexo/IndexFlexo';
import IndexDigital from '@/components/technology/technology-digital/IndexDigital';
import IndexOtherPrinting from '@/components/technology/technology-otherPrinting/IndexOtherPrinting';
function page() {
    const pathName = usePathname()
    return (
        <>
            {
                pathName === '/technology/gravure' &&
                <IndexGravure />
            }
            {
                pathName === '/technology/offset' &&
                <IndexOffset />
            }
            {
                pathName === '/technology/flexo' &&
                <IndexFlexo />
            }
            {
                pathName === '/technology/digital' &&
                <IndexDigital />
            }
            {
                pathName === '/technology/other-printing' &&
                <IndexOtherPrinting />
            }
        </>
    )
}

export default page