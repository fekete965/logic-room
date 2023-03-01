import React from 'react'

const ValidationContext = React.createContext({
  clientValidationMessages: [],
  updateClientValidationMessages: () => {}
})

export const ValidationProvider = (props) => {
  const [clientValidationMessages, updateClientValidationMessages] = React.useState([])

  return (
    <ValidationContext.Provider value={{ clientValidationMessages, updateClientValidationMessages }}>
      {props.children}
    </ValidationContext.Provider>
  )
}

export function useValidation() {
  const { clientValidationMessages, updateClientValidationMessages } = React.useContext(ValidationContext)
  return [clientValidationMessages, updateClientValidationMessages]
}
