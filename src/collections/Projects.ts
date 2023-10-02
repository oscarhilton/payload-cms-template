import { CollectionConfig } from 'payload/types';
import { isAdmin, isAdminOrClient } from "../access"

const Project: CollectionConfig = {
    slug: 'projects',
    admin: {
        useAsTitle: 'projectName',
        defaultColumns: ['status'],
    },
    access: {
        create: isAdmin,
        read: isAdminOrClient,
        update: isAdmin,
        delete: isAdmin
    },
    fields: [
        { name: 'projectName', type: 'text', required: true },
        {
            name: 'type',
            type: 'select',
            options: ['Website', 'App', 'Other'],
        },
        {
        name: 'website',
        type: 'relationship',
        relationTo: 'websites',
        admin: {
            condition: (data) => data.type === 'Website',
        },
        },
        {
            name: 'status',
            type: 'select',
            options: ['Proposed', 'Queued', 'InProgress', 'Completed'],
            defaultValue: "Proposed",
        },
        { name: 'startDate', type: 'date' },
        { name: 'dueDate', type: 'date' },
    ]
};

export default Project