import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {persistStore,persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import { composeWithDevTools } from 'remote-redux-devtools';
  
    
const persistConfig={
    key:'root',
    storage:AsyncStorage
}

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = createStore(
        persistedReducer,
        composeWithDevTools(
        applyMiddleware(...middleware)
        )
    );

    
export const persistor = persistStore(store)
   


    
 
  
    
   