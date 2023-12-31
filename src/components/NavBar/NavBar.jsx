import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className='text-themeWhite p-4 bg-themeDarkGreen'>
            <Link to="/home">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/about">About Us</Link>
            &nbsp; | &nbsp;
            <Link to="/services">Services |</Link>
            &nbsp;&nbsp; Welcome, {user.name} |
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}