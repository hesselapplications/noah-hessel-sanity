export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  // Remember to create the initial singleton document before overriding the default publishing actions in the next section.
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: "Experience",
      name: "experience",
      type: "array",
      of: [
        {
          title: "Experience",
          name: "experience",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string"
            },
            {
              title: "Organization",
              name: "organization",
              type: "string"
            },
            {
              title: "Start Date",
              name: "startDate",
              type: "date"
            },
            {
              title: "End Date",
              name: "endDate",
              type: "date"
            },
            {
              title: "Accomplishments",
              name: "accomplishments",
              type: "blockContent"
            },
          ],
          preview: {
            select: {
              title: 'title',
              startDate: 'startDate',
              endDate: 'endDate'
            },
            prepare({title, startDate, endDate}) {
              return {
                title: title,
                subtitle: `${startDate} to ${endDate || 'present'}`,
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Experience',
      }
    }
  }
}
