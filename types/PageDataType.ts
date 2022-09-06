export type FileType = {
    file? : { url: string }
    external? : { url: string }
}

// export type FileType = Record<"file" | "external", { url: string }>

export type AnnotationType = {
    bold: boolean
    code: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    color: boolean
}

export type RichTextType = {
    plain_text: string
    href: string | null
    annotations: AnnotationType

}

export type PropertyType = {
    name: { title: RichTextType[] }
    author: { rich_text: RichTextType[] }
    slug: { rich_text: RichTextType[] }
    published: { date: { start: string } }
    isPublic: { checkbox: boolean }
    tags: { multi_select: [{ name: string }] }
}

export type PageDataType = {
    id: string
    cover: FileType | null
    properties: PropertyType
}