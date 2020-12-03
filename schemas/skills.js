export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  // Remember to create the initial singleton document before overriding the default publishing actions in the next section.
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: "Skills",
      name: "skills",
      type: "array",
      of: [
        {
          title: "Skill",
          name: "skill",
          type: "object",
          fields: [
            {
              title: "Icon",
              name: "icon",
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
              title: "Level",
              name: "level",
              type: "number",
              validation: Rule => Rule.required().min(0).max(100)
            },
            {
              title: "Color",
              name: "color",
              type: "string",
              validation: Rule => Rule.required()
            },
          ]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Skills',
      }
    }
  }
}
