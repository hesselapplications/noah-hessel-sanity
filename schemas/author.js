export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'img',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent'
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'bio',
      media: 'image',
    },
  },
}
