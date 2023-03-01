import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/Providers/Injection'
import { LoginRegisterPresenter } from '../Authentication/LoginRegisterPresenter'

export const LogoutComp = observer((props) => {
  return (
    <div
      onClick={() => {
        props.presenter.logOut()
      }}
      className="navigation-item"
      style={{ backgroundColor: '#5BCA06' }}
    >
      <span>☯ Logout</span>
    </div>
  )
})

export const LogoutComponent = withInjection({ presenter: LoginRegisterPresenter })(LogoutComp)
