import React from 'react'
import { Provider } from 'react-redux'
import RootComponent from './RootComponent'
import store from './storeToolkit'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <RootComponent />
        </Provider>
    )
}

export default App
