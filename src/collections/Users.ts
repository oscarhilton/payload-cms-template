import { CollectionConfig } from 'payload/types';
import { isAdmin } from "../access"

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email'
  },
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Client', value: 'client' },
      ],
      required: true,
      defaultValue: 'client',
    },
    { name: 'firstName', type: 'text', required: true },
    { name: 'lastName', type: 'text', required: true },
    { name: 'companyName', type: 'text' },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'address', type: 'text' },
    { name: 'projects', type: 'relationship', relationTo: 'projects', hasMany: true }
  ],
};

export default Users;