import * as actions from 'constants/actions';
import {Profile} from 'models';

interface SignUpStart {
  type: typeof actions.USER_SIGN_UP_START;
}

interface SignUpSuccess {
  type: typeof actions.USER_SIGN_UP_SUCCESS;
  payload: Profile;
}

interface SignUpFailure {
  type: typeof actions.USER_SIGN_UP_FAILURE;
  error: string;
}

export type UserActionTypes = SignUpStart | SignUpSuccess | SignUpFailure;
