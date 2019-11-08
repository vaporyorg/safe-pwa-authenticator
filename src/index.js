import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import './index.css'
import Root from 'components/Root'
import { rootSaga, rootReducer } from './store'
import * as serviceWorker from './serviceWorker'
import 'typeface-roboto'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(combineReducers(rootReducer), applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

function render() {
  ReactDOM.render(<Root />, document.getElementById('root'))
}

render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
