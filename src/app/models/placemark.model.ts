export interface IPlacemark {
  type: string
  id: number
  geometry: IGeometry
  properties: IProperties
  options: IOptions
}

interface IGeometry {
  type: string
  coordinates: number[]
}

interface IProperties {
  balloonContentHeader: string
  balloonContentBody: string
  balloonContentFooter: string
  hintContent: string
}

interface IOptions {
  preset: string
}