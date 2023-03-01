import { injectable, inject } from 'inversify'
import { makeObservable, observable, action, computed } from 'mobx'
import { MessagesRepository } from './MessagesRepository'

@injectable()
export class MessagesPresenter {
  @inject(MessagesRepository)
  messagesRepository

  showValidationWarning = null

  get messages() {
    return this.messagesRepository.appMessages
  }

  constructor() {
    makeObservable(this, {
      showValidationWarning: observable,
      messages: computed,
      unpackRepositoryPmToVm: action
    })
  }

  init = () => {
    this.showValidationWarning = false
    this.reset()
  }

  unpackRepositoryPmToVm = (pm, userMessage) => {
    this.showValidationWarning = !pm.success
    this.messagesRepository.appMessages = pm.success ? [userMessage] : [pm.serverMessage]
  }
}
