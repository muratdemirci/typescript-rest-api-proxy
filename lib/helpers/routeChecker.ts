import { jsonReader } from './fileHelper'

const externalUrls = []
const chanellsData: Object = jsonReader('./channels.json')

export async function routesInit() {
  generateExternalUrls()
}

// checks if route exists on memory
export async function isRouteExists(routeUrl: string): Promise<Boolean> {
  if (externalUrls.includes(routeUrl)) {
    return true
  } else {
    return false
  }
}

// generates initial external urls
export async function generateExternalUrls(): Promise<void> {
  Object.values(chanellsData).forEach((channel) => {
    externalUrls.push(channel.urlPrefix)
  })
}

// finds url by prefix from channels list
export async function findApiUrlByPrefix(routePath) {
  const apiUrl = await Object.values(chanellsData).find((element) => element.urlPrefix == routePath)
  return apiUrl.internalUrl
}
