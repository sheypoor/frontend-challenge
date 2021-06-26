import {applyMiddleware, createStore, Store, AnyAction} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {UserState} from './reducers/user';
import rootReducer from './reducers';

type StoreState = {
  user: UserState;
};

export default function configureStore(): Store<StoreState, AnyAction> {
  return createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
