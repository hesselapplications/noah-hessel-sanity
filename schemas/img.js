export default {
  title: 'Image',
  name: 'img',
  type: 'image',
  validation: Rule => Rule.required(),
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: Rule => Rule.required(),
      options: {
        isHighlighted: true
      }
    }
  ]
}
