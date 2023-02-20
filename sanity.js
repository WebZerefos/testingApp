import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'dsugh7gv',
  dataset: 'production',
  apiVersion: '2022-02-20', // or the latest API version available
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);
export default client;
