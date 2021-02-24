export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
  ],
}
