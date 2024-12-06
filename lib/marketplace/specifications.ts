export interface DesignSpecs {
  dimensions: {
    width: number
    length: number
    height: number
    totalArea: number
  }
  materials: {
    id: string
    name: string
    quantity: number
    unit: string
    specifications: string
  }[]
  constructionDetails: {
    foundation: string
    walls: string
    roofing: string
    finishing: string
  }
  buildingCodes: string[]
  estimatedBuildTime: string
}

export async function getDesignSpecs(designId: string): Promise<DesignSpecs> {
  const response = await fetch(`/api/marketplace/specifications/${designId}`)
  return response.json()
}
