import { injectable, inject } from 'inversify'
import TreeModel from 'tree-model'
import { AuthenticationRepository } from '../Authentication/AuthenticationRepository'
import { Router } from '../Routing/Router'
import { makeObservable, computed, action } from 'mobx'

@injectable()
export class NavigationRepository {
  @inject(AuthenticationRepository)
  authenticationRepository

  @inject(Router)
  router

  get currentNode() {
    var self = this
    return this.getTree().all(function (node) {
      return node.model.id === self.router.currentRoute.routeId
    })[0]
  }

  constructor() {
    makeObservable(this, {
      currentNode: computed,
      back: action
    })
  }

  getTree() {
    let tree = new TreeModel()

    let root = tree.parse({
      id: 'homeLink',
      type: 'root',
      text: 'Home',
      children: []
    })

    return root
  }

  back = () => {
    let currentNode = this.currentNode
    this.router.goToId(currentNode.parent.model.id)
  }
}
