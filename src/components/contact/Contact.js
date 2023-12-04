import React from 'react'
import Banner from './Banner'
import Branch from './Branch'
import FormContact from './FormContact'

function Contact({ dataContact,lang,dataSocial }) {
    return (
        <>
            <Banner dataBanner={dataContact?.banner} />
            <main>
                <Branch 
                    lang={lang} 
                    dataBranch={dataContact?.contentAddress} 
                    dataSocial={dataSocial}
                />
                <FormContact dataForm={dataContact?.contentContact} />
            </main>
        </>
    )
}

export default Contact