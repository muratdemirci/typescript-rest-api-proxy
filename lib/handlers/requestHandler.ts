import { request } from 'undici'

//TODO: add CustomDto.
export async function channelHandler(channelUrl: string): Promise<Object> {
  // send request with http client
  const { statusCode, headers, body } = await request(channelUrl)

  const channelBody = await body.json()
  const channelHeaders = await headers
  const channelStatusCode = await statusCode

  const channelData = {
    channelStatusCode: channelStatusCode,
    channelHeaders: channelHeaders,
    channelBody: channelBody,
  }
  return channelData
}
