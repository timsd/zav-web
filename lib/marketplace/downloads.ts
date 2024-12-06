export async function downloadDesignFiles(designId: string) {
  const response = await fetch(`/api/marketplace/downloads/${designId}`, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch design files')
  }

  const blob = await response.blob()
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `design-${designId}.zip`
  document.body.appendChild(link)
  link.click()
  link.remove()
}
