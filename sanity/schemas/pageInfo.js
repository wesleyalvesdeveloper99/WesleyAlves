import { defineType } from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      options: { rows: 5 }
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }]
    }
  ],
})
