import { client } from './client';
import { Post } from "../services/types"

export async function getPosts() {
    const post = await client.getEntries<Post>({
        content_type: "post"
    })


    return post.items.map(transform)
}

export async function getPost(slug: string) {
    const post = await client.getEntries<Post>({
        content_type: "post",
        'fields.slug': slug
    })

    return post.items.map(transform)[0]
}

function transform(item: Entry<Post>) {
    return {
        ...item.fields,
        createdAt: new Date(item.sys.createdAt)
    }
}