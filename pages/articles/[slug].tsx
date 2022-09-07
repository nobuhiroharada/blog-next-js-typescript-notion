import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import ArticleMeta from '../../components/ArticleMeta'
import Block from '../../components/Block'
import Layout from '../../components/Layout'
import { ArticlePropsType } from '../../types/ArticlePropsType'
import { SlugParams } from '../../types/SlugParamsType'
import { fetchBlocksByPageId, fetchPages } from '../../utils/notion'
import { getText } from '../../utils/PagePropertyUtil'
import { sampleCards } from '../../utils/sample'
import NotionBlocks from 'notion-block-renderer'

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchPages({})
  const paths = results.map((page: any) => {
    return {
      params: {
        slug: getText(page.properties.slug.rich_text)
      }
    }
  })
  return {
    paths: paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as SlugParams

  const { results } = await fetchPages({ slug: slug })
  const page = results[0]
  const pageId = page.id
  const { results: blocks } = await fetchBlocksByPageId(pageId)

  return {
    props: {
      page: page,
      blocks: blocks,
    },
    revalidate: 10, // ISR 10秒毎にHTMLを再生成
  }
}

const Article: NextPage<ArticlePropsType> = ({ page, blocks }) => {
  return (
    <Layout>
      <article className="w-full">
        {/* meta section */}
        <div className="my-12">
          <ArticleMeta page={page} />
        </div>
 
        {/* article */}
        {/* <div className="my-12">
          {blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </div> */}
        <div className="my-12">
          <NotionBlocks blocks={blocks} isCodeHighlighter={true} />
        </div>
      </article>
    </Layout>
  )
}

export default Article