import {GET_USERS} from './ActionTypes';

export const setUsers = (data) => {
    return {type: GET_USERS, payload: data}
}
