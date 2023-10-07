import { CollectionConfig } from 'payload/types';
import { isAdminOrClient } from "../access"

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email'
  },
  access: {
    create: isAdminOrClient,
    read: isAdminOrClient,
    update: isAdminOrClient,
    delete: isAdminOrClient,
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
    { name: 'email', type: 'email', required: true },
    { name: 'companyName', type: 'text' },
    { name: 'phone', type: 'text' },
    { name: 'address', type: 'text' },
    { name: 'projects', type: 'relationship', relationTo: 'projects', hasMany: true }
  ],
};

export default Users;