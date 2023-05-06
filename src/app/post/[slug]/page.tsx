import { getPost, getPosts } from '@/app/services/posts'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Metadata } from 'next';
import Link from 'next/link';

import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import readingTime from 'reading-time'

interface Props {
    params: { slug: string }
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
    const post = await getPost(slug)
    return {
        title: post.title,
        description: post.metaDescription
    }
}

export async function generateStaticParams() {
    const posts = await getPosts()
    return posts.map(({ slug }) => ({ slug }))
}

export default async function Post({ params: { slug } }: Props) {
    const post = await getPost(slug)

    const time = readingTime(documentToPlainTextString(post.content as any))


    return (
        <div className='relative px-4 sm:px-8 lg:px-12'>
            <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                <div className='xl:relative'>
                    <div className='mx-auto max-w-2xl'>
                        <article>
                            <header className='flex flex-col'>
                                <Link href="/">
                                    <div className='flex gap-4 items-center mb-1 mt-7'><img src="https://c7.alamy.com/comp/2E1AYRX/skateboard-icon-outline-skateboard-vector-icon-for-web-design-isolated-on-white-background-2E1AYRX.jpg" alt="postimg" className='w-10 h-10' />
                                        <div> <h3 className='font-semibold text-2xl text-yellow-500 tracking-tight sm:text-xl '>   Skatemaniac  </h3></div>
                                    </div>
                                </Link>
                                <span> May 6, 2023 {time.text}</span>

                                <h1 className='mt-6 text-4xl font-bold tracking-tight text-yellow-500 dark:text-yellow-500 sm:text-5xl'> {post.title}</h1>
                            </header>
                            <div className='mt-8 prose'> {documentToReactComponents(post.content)}</div>
                        </article>
                    </div>
                </div>
            </div>


        </div>
    )
}
