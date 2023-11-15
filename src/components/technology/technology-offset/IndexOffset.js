import React from 'react'
import Introduce from './Introduce'
import System from './System'
import ContentOffset from './ContentOffset'

function IndexOffset({ data }) {
    console.log(data);
    return (
        <div>
            <Introduce />
            <System />
            <ContentOffset />
        </div>
    )
}

export default IndexOffset