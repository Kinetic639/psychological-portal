export default {
  name: 'Article',
  type: 'document',
  title: 'Article',
  fields: [
    {name: 'title', type: 'string', title: 'Title of article'},
    {name: 'slug', type: 'slug', title: 'Slug of your article', options: {source: 'title'}},
    {name: 'titleImage', type: 'image', title: 'Title Image'},
    {name: 'smallDescription', type: 'text', title: 'Small Description'},
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
