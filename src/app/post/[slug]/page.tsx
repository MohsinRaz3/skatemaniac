import { getPost } from '@/app/services/posts'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
    params: { slug: string }
}

export default async function Post({ params: { slug } }: Props) {
    const post = await getPost(slug)


    return (
        <div className=' flex flex-col '>
            <div className='mx-auto mt-10'>
                <div className='font-semibold text-2xl text-yellow-500 '>   {post.title} </div>
                <div className='mt-8 prose'> {documentToReactComponents(post.content)}</div>
            </div>

        </div>
    )
}
