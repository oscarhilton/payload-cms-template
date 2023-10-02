import { CollectionConfig } from 'payload/types';
import { isAdmin } from "../access"

const Invoices: CollectionConfig = {
    slug: 'invoices',
    access: {
        create: isAdmin,
        read: isAdmin,
        update: isAdmin,
        delete: isAdmin,
      },
    fields: [
        { name: 'invoiceNumber', type: 'text', required: true },
        { name: 'client', type: 'relationship', relationTo: 'users', required: true },
        { name: 'dateIssued', type: 'date', required: true },
        { name: 'dueDate', type: 'date', required: true },
        { name: 'totalAmount', type: 'number', required: true },
        { name: 'status', type: 'select', options: ['Unissued', 'Pending', 'Paid', 'Overdue'], required: true, defaultValue: 'Unissued' },
        { name: 'items', type: 'array', fields: [
            { name: 'description', type: 'text', required: true },
            { name: 'quantity', type: 'number', required: true },
            { name: 'unitPrice', type: 'number', required: true },
        ] },
        { name: 'notes', type: 'textarea' },
    ],
};

export default Invoices