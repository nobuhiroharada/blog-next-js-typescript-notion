import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import ArticleMeta from '../../components/ArticleMeta'
import Layout from '../../components/Layout'
import { ArticlePropsType } from '../../types/ArticlePropsType'
import { SlugParams } from '../../types/SlugParamsType'
import { sampleCards } from '../../utils/sample'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params as SlugParams

  const page = sampleCards.find((data) => data.slug === slug)

  return {
    props: {
      page: page,
    },
  }
}

const Article: NextPage<ArticlePropsType> = ({ page }) => {
  return (
    <Layout>
      <article className="w-full">
        {/* meta section */}
        <div className="my-12">
          <ArticleMeta page={page} />
        </div>
 
        {/* article */}
        <div className="my-12">article {page.content}</div>
      </article>
    </Layout>
  )
}

export default Article