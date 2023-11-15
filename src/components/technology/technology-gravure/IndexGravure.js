import React from 'react'
import Introduce from './Introduce'
import System from './System'
import ContentGravure from './ContentGravure'

function IndexGravure({ data }) {
    return (
        <div>
            <Introduce />
            <System />
            <ContentGravure />
        </div>
    )
}

export default IndexGravure