import { Container } from 'inversify'
import { MessagesRepository } from './Core/Messages/MessagesRepository'
import { RouterRepository } from './Routing/RouterRepository'
import { UserModel } from './Authentication/UserModel'
import { NavigationRepository } from './Navigation/NavigationRepository'

export class BaseIOC {
  container

  constructor() {
    this.container = new Container({
      autoBindInjectable: true,
      defaultScope: 'Transient'
    })
  }

  buildBaseTemplate = () => {
    this.container.bind(MessagesRepository).to(MessagesRepository).inSingletonScope()
    this.container.bind(RouterRepository).to(RouterRepository).inSingletonScope()
    this.container.bind(NavigationRepository).to(NavigationRepository).inSingletonScope()
    this.container.bind(UserModel).to(UserModel).inSingletonScope()
    return this.container
  }
}
