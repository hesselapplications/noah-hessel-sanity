import S from "@sanity/desk-tool/structure-builder";
 
export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Me')
        .child(
          S.editor()
            .schemaType('aboutMe')
            .documentId('aboutMe')
        ),

      S.listItem()
        .title('Skills')
        .child(
          S.editor()
            .schemaType('skills')
            .documentId('skills')
        ),

      S.listItem()
        .title('Experience')
        .child(
          S.editor()
            .schemaType('experience')
            .documentId('experience')
        ),

      // Add a visual divider (optional)
      S.divider(),

      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['aboutMe', 'skills', 'experience'].includes(listItem.getId()))
    ])