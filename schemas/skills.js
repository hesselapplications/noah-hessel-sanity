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
              type: "string"
            },
            {
              title: "Label",
              name: "label",
              type: "string"
            },
            {
              title: "Level",
              name: "level",
              type: "number"
            },
            {
              title: "Color",
              name: "color",
              type: "string"
            },
          ]
        }
      ]
    }
  ],
}
