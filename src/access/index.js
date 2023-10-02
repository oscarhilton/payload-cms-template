export const roleIsAdmin = (user) => user && user.role === 'admin'

export const isAdmin = (args) => {
  const { req: { user } } = args
  return roleIsAdmin(user)
}

export const isAdminOrCreatedBy = (args) => {
  return true;
};