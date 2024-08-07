import React from 'react'
import Main from './src/Screens/Main'
import { Provider } from 'react-redux'
import { myStore } from './src/redux/store/Store'
import Extra from './src/Screens/Extra'
import AppNavigation from './src/Navigation/AppNavigation'


const App = () => {
  return (
    <Provider store={myStore}>
      {/* <AppNavigation/> */}
      {/* <Main /> */}
      <Extra/>
    </Provider>
  )
}

export default App
