import {Reducer} from 'redux';
import {UserActionTypes} from 'actions/user/userActionTypes';
import * as actions from 'constants/actions';
import {Profile} from 'models';

export type UserState = {
  data: null | Profile;
  isFetching: boolean;
};

const initialState: UserState = {
  data: null,
  isFetching: false,
};
const UserReducer: Reducer<UserState, UserActionTypes> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actions.USER_SIGN_UP_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case actions.USER_SIGN_UP_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    }
    case actions.USER_SIGN_UP_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
