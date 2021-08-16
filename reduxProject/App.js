import React from 'react'
import MainStackNavigator from './src/navigation/AppNavigator'
import { Provider as StateProvider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <StateProvider store={store}>
      <MainStackNavigator />
    </StateProvider>
  )
}