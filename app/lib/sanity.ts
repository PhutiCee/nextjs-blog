import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '8u8322oz',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-03-07', // Set to today's UTC date
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}
