const frontPage = {
  title: 'Front page',
  name: 'frontPage',
  type: 'document',
  fields: [
    {
      title: 'Hero title',
      name: 'heroTitle',
      type: 'string',
      description: 'Hero title under the carousel',
    },
    {
      title: 'Hero description',
      name: 'heroDescription',
      type: 'string',
      description: 'Text underneath the hero title.',
    },
    {
      title: 'Subheader',
      name: 'subHeader',
      type: 'string',
      description: 'Subheading title.',
    },
    {
      title: 'Lower blurb',
      name: 'lowerBlurb',
      type: 'string',
      description: 'Text underneath the sub header.',
    },
  ],
};

export default frontPage;
