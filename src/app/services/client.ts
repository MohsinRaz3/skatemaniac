import * as contentful from 'contentful'

const client = contentful.createClient({
    space: process.env.CONTNETFUL_SPACE || "",
    accessToken: process.env.CONTENTFUL_TOKEN || "",
})
export { client }