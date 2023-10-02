export const roleIsAdmin = (user) => user && user.role === 'admin'

export const isAdmin = (args) => {
  const { req: { user } } = args
  return roleIsAdmin(user)
}

export const isAdminOrCreatedBy = (args) => {
  return true;
};

export const isAdminOrClient = (args) => {
  // if (roleIsAdmin(args.req.user)) {
  //   return true
  // }

  console.log({ args })

  return true
}

export const publishedOrLoggedIn = ({ req: { user } }) => {
  if (user) {
    return true
  }

  return {
    or: [
      {
        _status: {
          equals: 'published',
        },
      },
    ],
  }
}