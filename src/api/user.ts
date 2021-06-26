// @ts-ignore
import {createUser} from 'sdk';
import {User, Profile} from 'models';

// Create new user
export function create(user: User): Promise<Profile> {
  return createUser(user);
}
