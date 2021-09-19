
export const getErrorMessageByBackend = (error: any) => {
  const errorInfo = error?.errors[0]?.details
  return errorInfo || error?.message || 'Something went wrong,\n Please try again.'
}