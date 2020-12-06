export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'img',
    },
    {
      type: 'code',
      options: {
        withFilename: true,
        languageAlternatives: [
          // Front end
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},

          // Back end
          {title: 'Java', value: 'java'},
          {title: 'Python', value: 'python'},

          // Misc
          {title: 'JSON', value: 'json'},
          {title: 'Yaml', value: 'yaml'},
          {title: 'Markdown', value: 'markdown'},
          {title: 'Plain Text', value: 'text'},
        ],
      }
    },
  ],
}
