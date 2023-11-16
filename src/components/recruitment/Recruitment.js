import React from 'react'
import Banner from './Banner'
import Culture from './Culture'
import InputAndPagination from './InputAndPagination'
import Opportunity from './Opportunity'

function Recruitment({ data, lang, dataFirstIn }) {
    return (
        <>
            <Banner dataBanner={data?.banner} />
            <main>
                <Culture dataCulture={data?.content} />
                <div className='flex flex-col max-md:flex-col-reverse'>
                    <Opportunity lang={lang} dataOp={data?.content} />
                    <InputAndPagination dataFirstIn={dataFirstIn} />
                </div>
            </main>
        </>
    )
}

export default Recruitment