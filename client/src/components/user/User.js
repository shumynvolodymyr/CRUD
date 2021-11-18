import './User.css'
import {deleteUser} from '../../services/users.api';

export default function User({user}) {
    return (
        <div>
            <div className={'flex'}>
                <p className={'titles-box'}>USERNAME</p>
                <p className={'titles-box'}>FIRST NAME</p>
                <p className={'titles-box'}>LAST NAME</p>
                <p className={'titles-box'}>EMAIL</p>
                <p className={'titles-box'}>TYPE</p>
            </div>

            {user.map(value => {
                return (
                    <div className={'user-info-box'} key={value._id}>
                        <p className={'titles-box'}>{value.username}</p>
                        <p className={'titles-box'}>{value.first_name}</p>
                        <p className={'titles-box'}>{value.last_name}</p>
                        <p className={'titles-box'}>{value.email}</p>
                        <p className={'titles-box type-flex'}>{value.user_type}
                            <span className="item-delete"
                                 onClick={async () => {
                                     await deleteUser(value._id);
                                     document.location.reload();
                                 }}>
                                &#10008;
                            </span>
                        </p>
                    </div>
                )
            })}
        </div>
    );
}
