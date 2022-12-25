import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '2vur1so7',
    dataset: 'production',
    apiVersion: '2022-12-24',
    useCdn: true,
    token: 'skwc34ItEoUyKgM6Q3mkmxysEDP5LlktmKLB22ex6p7n4QeHf2FRlQLVixByWh1YRABqEYzC3zri9MSvj6ZDFPJicFnRKt5KMsm9WfZRTPAqOalT2H5OLB2AQ80k2MSN0amL9YcTTdcRjdWtle8RCNWnAELAvZhajWaMx1n0Q4jbfUHzaRXH',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);