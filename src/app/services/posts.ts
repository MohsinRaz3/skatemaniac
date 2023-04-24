import * as contentful from 'contentful'
import { Document } from '@contentful/rich-text-types';

interface Post {
    title: string,
    slug: string,
    content: Document
}
const client = contentful.createClient({
    space: process.env.CONTNETFUL_SPACE || "",
    accessToken: process.env.CONTENTFUL_TOKEN || "",
})

export async function getPosts() {
    const post = await client.getEntries({
        content_type: "post"
    })

    return post.items.map(item => item.fields) as Post[]
}

export async function getPost(slug: string) {
    const post = await client.getEntries({
        content_type: "post",
        'fields.slug': slug
    })

    return post.items.map(item => item.fields)[0] as Post
}