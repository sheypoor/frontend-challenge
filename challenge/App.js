import React, {Component} from 'react'
import {
  applyMiddleware,
  createStore
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import reduxStore from 'challenge/src/reducers'
import Root from 'challenge/src/components'

const store = createStore(
  reduxStore,
  applyMiddleware(
    thunkMiddleware
  )
)

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}