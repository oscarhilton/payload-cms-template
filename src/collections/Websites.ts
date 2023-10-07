import { CollectionConfig } from 'payload/types';
import { isAdminOrClient } from "../access"

const Websites: CollectionConfig = {
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
      name: 'theme',
      type: 'relationship',
      relationTo: 'themes',
    },
    {
      name: 'homepage',
      type: 'relationship',
      relationTo: 'pages',
    },
    {
      name: 'pages',
      type: 'relationship',
      relationTo: 'pages',
      hasMany: true,
    },
  ],
};

export default Websites;