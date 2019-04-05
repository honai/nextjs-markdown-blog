import Link from 'next/link'
import List from '../post-list'

export default () => (<>
  <h1>Index</h1>
  <ul>
    {List.map((elem, id) => (
      <li key={id}><Link href={`post?path=${elem}`}><a>{elem}</a></Link></li>
    ))}
  </ul>
</>)