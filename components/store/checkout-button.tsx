const handleCheckout = () => {
  if (!isAuthenticated) {
    router.push('/auth/login?redirect=/checkout')
    return
  }
  // Continue with checkout process
}
