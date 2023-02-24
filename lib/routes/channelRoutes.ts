import { Request, Response, NextFunction } from 'express'
import { apiErrorHandler } from '../handlers/errorHandler'
import { MainController } from '../controllers/mainController'
import { isRouteExists, routesInit } from '../helpers/routeChecker'

export class Routes {
  public mainController: MainController = new MainController()

  constructor() {
    // init static routes
    routesInit()
  }

  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'DEUSMUR DIGITAL CHANNEL API ONLINE',
      })
    })

    // get all requests and check if exists
    app.get(
      '/:routePath',
      async (req: Request, res: Response, next: NextFunction) => {
        const routePath = req.path.replace('/', '')
        try {
          const routeExist = await isRouteExists(routePath)
          if (routeExist) {
            next()
          } else {
            res.status(404).send({ message: `Route not found. Route path: /${routePath}` })
          }
        } catch (error) {
          apiErrorHandler(error, req, res, `Api request failed. Request path: /${routePath}`)
        }
      },
      this.mainController.channels
    )
  }
}
