import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'name',
  title: 'Name',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
    }),
  ],
})
