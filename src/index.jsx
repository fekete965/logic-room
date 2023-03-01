import 'reflect-metadata'
import './styles.css'
import * as React from 'react'
import { render } from 'react-dom'
import { InjectionProvider } from './Core/Providers/Injection'
import { ValidationProvider } from './Core/Providers/Validation'
import { AppComponent } from './AppComponent'
import { container } from './AppIOC'
import { configure } from 'mobx'

configure({
  enforceActions: 'never',
  computedRequiresReaction: false,
  reactionRequiresObservable: false,
  observableRequiresReaction: false,
  disableErrorBoundaries: false
})

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <InjectionProvider container={container}>
      <ValidationProvider>
        <AppComponent />
      </ValidationProvider>
    </InjectionProvider>
  </React.StrictMode>,
  rootElement
)
