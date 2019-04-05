import { withRouter } from 'next/router'
import Link from 'next/link'
import ReactMd from 'react-markdown'

const Page = ({router}) => {
  const path = router.query.path
  const text = require(`../posts/${path}`)

  return (
    <>
      <h1>Post</h1>
      <Link href={`/`}><a>Home</a></Link>
      <ReactMd source={text.default} />
    </>
  )
}

export default withRouter(Page)