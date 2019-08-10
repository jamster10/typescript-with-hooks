import React from 'react'
import { Store } from './Store'

export default function App(): JSX.Element {
  const store = React.useContext(Store);
  
  return (
    <>
    {console.log(Store)}
      <h1>Rick and Morty</h1>
      <p>Pick Your favourite episode!</p>
    </>
  )
}
