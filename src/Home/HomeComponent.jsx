import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/Providers/Injection'

export const HomeComp = observer((props) => {
  return (
    <>
      <h1>Home</h1>
    </>
  )
})

export const HomeComponent = withInjection({})(HomeComp)
