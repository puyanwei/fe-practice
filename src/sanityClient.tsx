import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'ykyoka4l',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: true,
});
