import { injectable, inject } from 'inversify'
import { makeObservable, observable, action } from 'mobx'
import { AuthenticationRepository } from './AuthenticationRepository'
import { MessagesPresenter } from '../Core/Messages/MessagesPresenter'
import { Router } from '../Routing/Router'

@injectable()
export class LoginRegisterPresenter extends MessagesPresenter {
  @inject(AuthenticationRepository)
  authenticationRepository

  @inject(Router)
  router

  email = null
  password = null
  option = null

  constructor() {
    super()
    makeObservable(this, {
      email: observable,
      password: observable,
      option: observable,
      reset: action,
      login: action,
      register: action,
      logOut: action
    })
    this.init()
  }

  reset = () => {
    this.email = ''
    this.password = ''
    this.option = 'login'
  }

  login = async () => {
    let loginPm = await this.authenticationRepository.login(this.email, this.password)

    this.unpackRepositoryPmToVm(loginPm, 'User logged in')

    if (loginPm.success) {
      this.router.goToId('homeLink')
    }
  }

  register = async () => {
    let registerPm = await this.authenticationRepository.register(this.email, this.password)

    this.unpackRepositoryPmToVm(registerPm, 'User registered')
  }

  logOut = async () => {
    this.authenticationRepository.logOut()
    this.router.goToId('loginLink')
  }
}
