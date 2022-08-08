import propTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';


export const FriendList = ({friends}) => {
    return (
    <div className={css.friends__thumb}>
        <ul className={css.friends}>
        {friends.map(el => (
            <FriendListItem key={el.id}
                avatar={el.avatar}
                name={el.name}
                isOnline={el.isOnline}
            />
        ))}
        </ul>
    </div>)
}

FriendList.propTypes = {
    firends: propTypes.arrayOf(propTypes.exact({
        id: propTypes.number.isRequired,
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        isOnline: propTypes.bool.isRequired,
    })
    )
}