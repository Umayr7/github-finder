import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const UserItem = ({ user: {login, avatar_url, html_url} }) => {
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
                <h3> {login} </h3>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

// class UserItem extends Component {
//     render() {
//         const {login, avatar_url, html_url} = this.props.user
//         return (
//             <div className="card text-center">
//                 <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
//                 <h3> {login} </h3>
//                 <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
//             </div>
//         )
//     }
// }

export default UserItem
