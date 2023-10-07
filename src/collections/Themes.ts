import { CollectionConfig } from 'payload/types';
import { isAdminOrClient } from "../access"

const Themes: CollectionConfig = {
  slug: 'themes',
  admin: {
    useAsTitle: 'title',
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
      name: 'themeData',
      type: 'json',
      required: true,
    },

  ],
};

export default Themes;