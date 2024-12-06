export const checkMarketplaceAccess = (userRole: Role) => {
  return ['USER', 'SELLER', 'STAFF', 'ADMIN'].includes(userRole)
}
