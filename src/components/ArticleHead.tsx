import { Head , Title, Meta, Link, Body, Scripts } from 'solid-start'

const Articlehead = ({ title, description }) => {
  return (
    <Head>
      <Title>{title} - Solid Blog</Title>
      <Meta name="description" content={description}/>
      <Meta property='og:description' content={description} />
      <Meta property='og:title' content={`${title} - Solid Blog`} />
    </Head>
  )
}

export default Articlehead