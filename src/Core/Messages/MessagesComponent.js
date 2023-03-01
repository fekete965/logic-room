import * as React from 'react'
import { observer } from 'mobx-react'
import { MessagesPresenter } from '../Messages/MessagesPresenter'
import { withInjection } from '../Providers/Injection'
import { useValidation } from '../Providers/Validation'

export const MessagesComp = observer((props) => {
  let [uiMessages] = useValidation()

  return (
    <>
      {props.presenter.messages &&
        props.presenter.messages.map((item, i) => {
          return (
            <div style={{ backgroundColor: 'red' }} key={i}>
              {' - '}
              {item}
            </div>
          )
        })}
      {uiMessages &&
        uiMessages.map((item, i) => {
          return (
            <div style={{ backgroundColor: 'orange' }} key={i}>
              {' - '}
              {item}
            </div>
          )
        })}
    </>
  )
})

export const MessagesComponent = withInjection({
  presenter: MessagesPresenter
})(MessagesComp)
