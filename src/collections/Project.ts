import { CollectionConfig } from 'payload/types';

const Project: CollectionConfig = {
    slug: 'projects',
    fields: [
        { name: 'client', type: 'relationship', relationTo: 'clients', required: true },
        { name: 'domainName', type: 'text', required: true },
        { name: 'hostingDetails', type: 'text' },
        { name: 'status', type: 'select', options: ['In Progress', 'Completed'], required: true },
        { name: 'startDate', type: 'datetime' },
        { name: 'dueDate', type: 'datetime' }
    ]
};

export default Project