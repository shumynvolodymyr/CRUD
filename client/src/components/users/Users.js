import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUsers} from '../../services/users.api';
import User from '../user/User';
import './Users.css'
import CreateUserForm from '../create_user_form/CreateUserForm';

export default function Users() {
    const {usersReducer: {users}} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    return (
        <div className={'flex'}>
            <div className={'users-box'}>
                {users.map((user, index) => <User user={user} key={index + 1}/>)}
            </div>
            <div className={'create-user-box'}>
                <p>Create new user</p>
                <CreateUserForm/>
            </div>
        </div>
    );
}
