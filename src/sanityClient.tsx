import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'ykyoka4l',
  dataset: 'production',
  apiVersion: '2021-10-30',
  useCdn: true,
});
