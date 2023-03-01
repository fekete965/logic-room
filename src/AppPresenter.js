import { inject, injectable } from 'inversify'
import { makeObservable, computed } from 'mobx'
import { MessagesRepository } from './Core/Messages/MessagesRepository'
import { Router } from './Routing/Router'

@injectable()
export class AppPresenter {
  @inject(Router)
  router

  @inject(MessagesRepository)
  messagesRepository

  get currentRoute() {
    return this.router.currentRoute
  }

  constructor() {
    makeObservable(this, {
      currentRoute: computed
    })
  }

  load = (onRouteChange) => {
    const onRouteChangeWrapper = () => {
      this.messagesRepository.appMessages = []
      onRouteChange()
    }
    this.router.registerRoutes(onRouteChangeWrapper)
  }
}
