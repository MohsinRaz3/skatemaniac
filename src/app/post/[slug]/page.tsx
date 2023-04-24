import { getPost } from '@/app/services/posts'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import React from 'react'
interface Props {
    params: { slug: string }
}

export default async function Post({ params: { slug } }: Props) {
    const post = await getPost(slug)
    return (
        <div>

            {post.title}
            {documentToReactComponents(post.content)}

        </div>
    )
}
