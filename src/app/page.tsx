import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getPosts } from './services/posts'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const posts = await getPosts()

  return (
    <>
      <section className='flex'>
        <div className='mx-auto'>
          <div>
            <div className='mt-10 mb-8'><h2 className='text-yellow-500 text-4xl font-bold'>Skatemanic</h2></div>
            <ul>{
              posts.map(post => (
                <li className='my-2' key={post.slug}>
                  <Link href={`post/${post.slug}`}>{post.title}</Link>
                </li>

              ))}

            </ul>
          </div>
        </div>
      </section>
    </>)
}
