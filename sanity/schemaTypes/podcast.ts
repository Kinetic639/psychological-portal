export default {
  name: 'podcast',
  type: 'document',
  title: 'Podcast',
  fields: [
    {name: 'title', type: 'string', title: 'Title of article'},
    {name: 'slug', type: 'slug', title: 'Slug of your article', options: {source: 'title'}},
    {name: 'titleImage', type: 'image', title: 'Title Image'},
    {name: 'smallDescription', type: 'text', title: 'Small Description'},
  ],
}
