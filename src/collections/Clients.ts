import payload from 'payload';
import { CollectionConfig } from 'payload/types';
import { isAdmin, isAdminOrClient } from "../access"

const Client: CollectionConfig = {
    slug: 'clients',
    fields: [
        { name: 'firstName', type: 'text', required: true },
        { name: 'lastName', type: 'text', required: true },
        { name: 'companyName', type: 'text' },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'text' }
    ],
    access: {
        create: isAdmin,
        read: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    hooks: {
        beforeChange: [async ({ req, operation, data }) => {
            if (operation === 'update') {
                const userEmail = data.email;  // Assuming you have the user's email in the data

                if (userEmail) {
                    // Check if a user with the given email already exists
                    const existingUsers = await payload.find({
                        collection: 'users',
                        where: {
                            email: {
                                equals: userEmail
                            }
                        }
                    });

                    console.log({ existingUsers: existingUsers.docs })

                    let userId;
                    if (existingUsers && existingUsers.docs.length > 0) {
                        // User exists, get the user ID
                        userId = existingUsers.docs[0]?.id;
                    } else {
                        // User doesn't exist, create a new user
                        const newUser = await payload.create({
                            collection: 'users',
                            data: {
                                email: userEmail,
                                password: 'client-test'
                            }
                        });
                        userId = newUser.id;
                    }

                    // Assign the user ID to the clientDetails field
                    data.clientDetails = userId;
                }
            }
        }]
    }
};

export default Client