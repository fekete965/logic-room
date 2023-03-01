import { injectable, inject } from 'inversify'
import { makeObservable, observable } from 'mobx'

@injectable()
export class MessagesRepository {
  appMessages = null

  constructor() {
    makeObservable(this, {
      appMessages: observable
    })
    this.reset()
  }

  reset = () => {
    this.appMessages = []
  }
}
