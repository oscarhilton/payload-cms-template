import { CollectionConfig } from 'payload/types';
import { roleIsAdmin, isAdminOrCreatedBy } from "../access"

const Project: CollectionConfig = {
    slug: 'projects',
    admin: {
        useAsTitle: 'projectName'
    },
    access: {
        create: isAdminOrCreatedBy,
        read: isAdminOrCreatedBy,
        update: isAdminOrCreatedBy,
    },
    fields: [
        { name: 'projectName', type: 'text', required: true },
        {
            name: 'status',
            type: 'select',
            options: ['Proposed', 'Queued', 'InProgress', 'Completed'],
            defaultValue: "Proposed",
            required: true,
            admin: {
                condition: (data, siblingData, { user }) => {
                    return roleIsAdmin(user)
                },
            }
        },
        { name: 'startDate', type: 'number' },
        { name: 'dueDate', type: 'number' },
    ]
};

export default Project