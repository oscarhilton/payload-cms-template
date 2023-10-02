import { CollectionConfig } from 'payload/types';
import { isAdminOrClient } from "../access"

const Users: CollectionConfig = {
  slug: 'websites',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'domain'],
  },
  access: {
    create: isAdminOrClient,
    update: isAdminOrClient,
    delete: isAdminOrClient,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'domain',
      type: 'text',
      required: true,
    },
    {
        name: 'pages',
        type: 'relationship',
        hasMany: true,
        relationTo: 'pages',
    },
    {
        name: 'redirect',
        type: 'text',
    }
  ],
};

export default Users;