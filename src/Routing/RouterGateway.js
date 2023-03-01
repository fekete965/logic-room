import { injectable } from 'inversify'
import Navigo from 'navigo'

@injectable()
export class RouterGateway {
  navigo

  registerRoutes = async (routeConfig) => {
    if (this.navigo) return new Promise((resolve) => setTimeout(resolve, 0))
    this.navigo = new Navigo('/')
    let self = this.navigo
    self
      .on(routeConfig)
      .notFound(() => {})
      .resolve()

    return new Promise((resolve) => setTimeout(resolve, 0))
  }

  unload = () => {
    this.navigo.destroy()
  }

  goToId = async (name, queryString) => {
    this.navigo.navigateByName(name, queryString)
  }
}
