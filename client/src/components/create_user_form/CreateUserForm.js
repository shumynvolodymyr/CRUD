import './CreateUserForm.css'
import {postUser} from '../../services/users.api';
import {useState} from 'react';

export default function CreateUserForm() {
    let [stateForm, setStateForm] = useState({});

    let onInputChange = (e) => {
        const newUser = {[e.target.name]: e.target.value}
        setStateForm({...stateForm, ...newUser})
    };

    const clickOnSubmit = async (e) => {
        e.preventDefault();
        await postUser(stateForm);
        document.location.reload();
    };

    return (
        <div className={'form-box'}>
            <form className='create-user-form'>
                <label htmlFor='username'>Username* </label>
                <input className={'input'}
                       onChange={onInputChange}
                       id='username'
                       required
                       name='username'
                       placeholder=' username'
                       type='text'
                />

                <label htmlFor='first_name'>First name*</label>
                <input className={'input'}
                       onChange={onInputChange}
                       id='first_name'
                       required name='first_name'
                       placeholder=' first name'
                       type='text'
                />

                <label htmlFor='last_name'>Last name</label>
                <input className={'input'}
                       onChange={onInputChange}
                       id='last_name'
                       required
                       name='last_name'
                       placeholder=' last name'
                       type='text'
                />

                <label htmlFor='email'>Email*</label>
                <input className={'input'}
                       onChange={onInputChange}
                       id='email'
                       required
                       name='email'
                       placeholder=' email'
                       type='text'
                />

                <label htmlFor='user_type'>Type*</label>
                <select onChange={onInputChange} className={'input'} id='user_type' required name='user_type'>
                    <option value=''/>
                    <option value='Driver'>Driver</option>
                    <option value='Admin'>Admin</option>
                </select>

                <label htmlFor='password'>Password*</label>
                <input className={'input'}
                       onChange={onInputChange}
                       id='password' autoComplete='on' required name='password'
                       placeholder=' password' type='password'
                />
            </form>
            <button
                className={'button-create'}
                onClick={clickOnSubmit}
            >Create
            </button>
        </div>
    );
}
