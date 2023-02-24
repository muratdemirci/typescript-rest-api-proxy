import request from 'supertest'
import app from '../lib/app'
import { jsonReader } from '../lib/helpers/fileHelper'

const chanellsData: Object = jsonReader('./channels.json')
const externalUrls: string[] = []

const setInitialUrls = () => {
  Object.values(chanellsData).forEach((channel) => {
    externalUrls.push(channel.urlPrefix)
  })
}

setInitialUrls()

describe('API Proxy Route Tests', () => {
  test('/ should returns salute message', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toMatch('DEUSMUR DIGITAL CHANNEL API ONLINE')
  })

  test('/:invalid-url should returns route not found message', async () => {
    const channelRoutePath = '/obiwan-kenobi'
    const response = await request(app).get(channelRoutePath)
    expect(response.statusCode).toBe(404)
    expect(response.body.message).toMatch(`Route not found. Route path: ${channelRoutePath}`)
  })

  // single channel http request
  test('/:valid-url should returns success status', async () => {
    const channelRoutePath = `/${externalUrls[4]}`
    const response = await request(app).get(channelRoutePath)
    // const channelName = 'DEUSMUR'

    expect(response.statusCode).toBe(200)
    // server name should match with channel name
    // expect(response.body.message.channelHeaders.server).toMatch(channelName)
  })

  // check status of each channels
  test('/:valid-url each channel in channels.json, should be active', async () => {
    let response
    const activeChannels: string[] = []

    for (let i = 0; i < externalUrls.length; i++) {
      let channelRoutePath = externalUrls[i]

      response = await request(app).get(`/${channelRoutePath}`)
      expect(response.statusCode).toBe(200)
      if (response.statusCode == 200) {
        activeChannels.push(channelRoutePath)
      } else {
        throw new Error(`channel is not active! channelRoutePath: ${channelRoutePath}`)
      }
    }

    expect(activeChannels.length).toBe(externalUrls.length)
  })
})
