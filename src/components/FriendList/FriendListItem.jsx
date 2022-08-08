import propTypes from 'prop-types';
import css from './FriendListItem.module.css';


export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
     <li className={css.friend__item} >
     <span className={css.friends__status} style={{ backgroundColor: isOnline ? '#21CA28' : '#CA3821' }}></span>
     <img src={avatar} alt="User avatar" width="48" />
     <p className={css.friend__name}>{name}</p>
    </li>)
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
}