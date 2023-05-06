import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getPosts } from './services/posts'
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Skatemaniac"

}

export default async function Home() {
  const posts = await getPosts()

  return (

    <main>
      <div className='mt-24 sm:px-8 md:mt-28'>
        <div className='mx-auto max-w-6xl lg:px-12'>
          <div className='mx-auto max-w-2xl lg:max-w-5xl'>
            <div className='mx-auto lg:px-28 max-2-xl grid-cols-1 gap-y-20 lg:grid-cols-2'>
              <div className='flex flex-col gap-16'>
                <ul>{
                  posts.map(post => (
                    <li className='my-2' key={post.slug}>
                      <Link href={`post/${post.slug}`}>{post.title}</Link>
                    </li>

                  ))}

                </ul>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
