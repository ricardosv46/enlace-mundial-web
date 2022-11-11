import Head from 'next/head'
import React from 'react'

const OpenGraph = ({
  keywords,
  title,
  description,
  url,
  img
}) => {
  return (
    <Head>
      {/* <title>{title}</title> */}
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:site_name' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={img} />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='300' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta property='twitter:url' content={url} />
      <meta name='twitter:image' content={img} />

    </Head>
  )
}


export default OpenGraph
