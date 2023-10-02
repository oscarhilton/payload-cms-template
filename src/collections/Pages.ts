import payload from 'payload';
import { CollectionConfig } from 'payload/types';
import { isAdminOrClient } from "../access"

const foo = async ({ data, originalDoc }) => {
    if (data.isHomepage) {

        const res = await payload.find({
            collection: 'pages',
            where: {
                id: {
                    not_equals: originalDoc.id
                },
                isHomepage: {
                    equals: true
                }
            }
        })

        if (res.docs.length > 0) {
            throw new Error('There can only be one homepage')
        }
    }
}

const Project: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title'],
    },
    access: {
        create: isAdminOrClient,
        read: isAdminOrClient,
        update: isAdminOrClient,
        delete: isAdminOrClient
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'isHomepage', type: 'checkbox', defaultValue: false, hooks: { beforeChange: [foo] }},
    ]
};

export default Project