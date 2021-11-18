import axios from 'axios';
import {setUsers} from '../redux/actions/ActionCreator';

const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const getUsers = () => {
    return async (dispatch) => {
        const response = await host.get('users');
        dispatch(setUsers([...response.data]));
    }
};

const postUser = async (value) => {
    await host.post('users', value);
}

const deleteUser = async (id) => {
    await host.delete('users/' + id)
}

export {getUsers, postUser, deleteUser};
