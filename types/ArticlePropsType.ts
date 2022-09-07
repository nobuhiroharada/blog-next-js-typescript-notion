import { PageDataType } from "./PageDataType"
import { BlockType } from 'notion-block-renderer'

export type ArticlePropsType = {
    page: PageDataType
    blocks: BlockType[]
}
