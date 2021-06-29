import {Dispatch} from 'redux';
import {createBrowserHistory} from 'history';
import Cookies from 'universal-cookie';
import * as actions from 'constants/actions';
import {UserActionTypes} from './userActionTypes';
import {create as createUser} from 'api/user';
import {User, Profile} from 'models';

const cookies = new Cookies();
export const history = createBrowserHistory();

export const create =
  (user: User) => async (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({type: actions.USER_SIGN_UP_START});
    try {
      const response: Profile = await createUser(user);
      dispatch({type: actions.USER_SIGN_UP_SUCCESS, payload: response});
      cookies.set('auth-token', response.token, {path: '/'});
    } catch (error) {
      dispatch({type: actions.USER_SIGN_UP_FAILURE, error});
    }
  };
