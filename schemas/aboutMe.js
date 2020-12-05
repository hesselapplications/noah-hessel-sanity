export default {
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  // Remember to create the initial singleton document before overriding the default publishing actions in the next section.
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'myPicture',
      title: 'My Picture',
      type: 'img',
    },
    {
      name: 'aboutMe',
      title: 'About Me',
      type: 'blockContent',
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [
        {
          title: "Link",
          name: "link",
          type: "object",
          fields: [
            {
              title: "URL",
              name: "url",
              type: "url",
              validation: Rule => Rule.required()
            },
            {
              title: "Color",
              name: "color",
              type: "string",
              validation: Rule => Rule.required()
            },
            {
              title: "Label",
              name: "label",
              type: "string",
              validation: Rule => Rule.required()
            },
            {
              title: "Icon",
              name: "icon",
              type: "string",
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'aboutMe',
    },
  },
}
