import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/Providers/Injection'
import { Router } from '../Routing/Router'
import { NavigationPresenter } from './NavigationPresenter'
import { LogoutComponent } from '../Authentication/LogoutComponent'

export const NavigationComp = observer((props) => {
  return (
    <div className="navigation-container">
      <div className="navigation-item-header" style={{ backgroundColor: '#5BCA06' }}>
        {props.presenter.viewModel.currentSelectedVisibleName}
      </div>
      {props.presenter.viewModel.menuItems.map((menuItem, i) => {
        return (
          <div
            key={i}
            className="navigation-item"
            style={{
              backgroundColor: '#3DE7CF'
            }}
            onClick={() => {
              props.router.goToId(menuItem.id)
            }}
          >
            {menuItem.visibleName}
          </div>
        )
      })}
      {props.presenter.viewModel.showBack && (
        <div
          className="navigation-item"
          onClick={() => {
            props.presenter.back()
          }}
          style={{ backgroundColor: '#2e91fc' }}
        >
          <span>⬅ </span>Back
        </div>
      )}
      <LogoutComponent />
    </div>
  )
})

export const NavigationComponent = withInjection({
  presenter: NavigationPresenter,
  router: Router
})(NavigationComp)
