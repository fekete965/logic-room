import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/Providers/Injection'
import { LoginRegisterPresenter } from './LoginRegisterPresenter'
import { MessagesComponent } from '../Core/Messages/MessagesComponent'

const LoginRegisterComp = observer((props) => {
  return (
    <div className="login-register">
      <div className="w3-row">
        <div className="w3-col s4 w3-center">
          <br />
        </div>
        <div className="w3-col s4 w3-center logo">
          <img
            alt="logo"
            style={{ width: 160, filter: 'grayscale(100%)' }}
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147767979/settings_images/iE7LayVvSHeoYcZWO4Dq_web-logo-pink-light-bg3x.png"
          />
        </div>
        <div className="w3-col s4 w3-center">
          <br />
        </div>
      </div>
      <div className="w3-row">
        <div className="w3-col s4 w3-center">
          <br />
        </div>
        <div className="w3-col s4 w3-center option">
          <input
            className="lr-submit"
            style={{ backgroundColor: '#e4257d' }}
            type="submit"
            value="login"
            onClick={() => {
              props.presenter.option = 'login'
            }}
          />
          <input
            className="lr-submit"
            style={{ backgroundColor: '#2E91FC' }}
            type="submit"
            value="register"
            onClick={() => {
              props.presenter.option = 'register'
            }}
          />
        </div>
        <div className="w3-col s4 w3-center">
          <br />
        </div>
      </div>
      <div
        className="w3-row"
        style={{
          backgroundColor: props.presenter.option === 'login' ? '#E4257D' : '#2E91FC',
          height: 100,
          paddingTop: 20
        }}
      >
        <form
          className="login"
          onSubmit={(event) => {
            event.preventDefault()
            if (formValid()) {
              if (props.presenter.option === 'login') props.presenter.login()
              if (props.presenter.option === 'register') props.presenter.register()
            }
          }}
        >
          <div className="w3-col s4 w3-center">
            <input
              type="text"
              value={props.presenter.email}
              placeholder="Email"
              onChange={(event) => {
                props.presenter.email = event.target.value
              }}
            />
          </div>
          <div className="w3-col s4 w3-center">
            {' '}
            <input
              type="text"
              value={props.presenter.password}
              placeholder="Password"
              onChange={(event) => {
                props.presenter.password = event.target.value
              }}
            />
          </div>
          <div className="w3-col s4 w3-center">
            <input type="submit" className="lr-submit" value={props.presenter.option} />
          </div>

          <br />
          <br />
          <br />
        </form>
      </div>
      <MessagesComponent />
    </div>
  )
})

export const LoginRegisterComponent = withInjection({
  presenter: LoginRegisterPresenter
})(LoginRegisterComp)
