import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getPosts } from './services/posts'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const posts = await getPosts()
  return (
    <>
      <h2>Skatemanic</h2>
      <ul>{
        posts.map(post => (
          <li key={post.slug}>
            <Link href="/post/${post.slug}">{post.title}</Link>
          </li>

        ))}

      </ul>
    </>)
}
