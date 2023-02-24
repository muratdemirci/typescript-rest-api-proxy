import { NextFunction, Request, Response } from 'express'
import { apiErrorHandler } from '../handlers/errorHandler'
import { channelHandler } from '../handlers/requestHandler'
import { findApiUrlByPrefix } from '../helpers/routeChecker'

export class MainController {
  public async channels(req: Request, res: Response, next: NextFunction) {
    try {
      const routePath = req.path.replace('/', '')
      // find internalUrl by externalUrlPrefix
      const apiUrl = await findApiUrlByPrefix(routePath)
      // send request with http client
      const channelData = await channelHandler(apiUrl)
      res.json({ message: channelData })
    } catch (error) {
      apiErrorHandler(error, req, res, 'Fetch All channelData failed.')
    }
  }
}
