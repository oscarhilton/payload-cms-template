import { CollectionConfig } from 'payload/types';

const Client: CollectionConfig = {
    slug: 'clients',
    fields: [
        { name: 'firstName', type: 'text', required: true },
        { name: 'lastName', type: 'text', required: true },
        { name: 'companyName', type: 'text' },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'text' }
    ]
};

export default Client