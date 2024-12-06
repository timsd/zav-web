export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(price)
}

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
