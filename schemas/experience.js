import moment from 'moment';

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
              type: "string",
              validation: Rule => Rule.required()
            },
            {
              title: "Organization",
              name: "organization",
              type: "string",
              validation: Rule => Rule.required()
            },
            {
              title: "Start Date",
              name: "startDate",
              type: "date",
              validation: Rule => Rule.required()
            },
            {
              title: "End Date",
              name: "endDate",
              type: "date",
              validation: Rule => Rule.min(Rule.valueOfField('startDate'))
            },
            {
              title: "Accomplishments",
              name: "accomplishments",
              type: "blockContent",
              validation: Rule => Rule.required()
            },
          ],
          preview: {
            select: {
              title: 'title',
              startDate: 'startDate',
              endDate: 'endDate'
            },
            prepare({title, startDate, endDate}) {
              function formatDate(date) {
                if (date == null) return "Present";
                return moment(date).format('MMM YYYY');
              }

              return {
                title: title,
                subtitle: `${formatDate(startDate)} — ${formatDate(endDate)}`,
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
