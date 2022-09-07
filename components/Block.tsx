import React, { FC } from 'react'
import { BlockPropsType } from '../types/BlockPropsType'
import { getText } from '../utils/PagePropertyUtil'

const Block: FC<BlockPropsType> = ({ block }) => {
    switch (block.type) {
        case "heading_1":
            return <h1>{getText(block.heading_1.rich_text)}</h1>
        case "heading_2":
            return <h2>{getText(block.heading_2.rich_text)}</h2>
        case "paragraph":
            return <p>{getText(block.paragraph.rich_text)}</p>
        default:
            console.log(`unknown block type: ${block.type}`)
            return <></>
    }
}

export default Block