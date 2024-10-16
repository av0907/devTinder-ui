import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import axios from "axios";



const NavBar = ()=>{

    const user = useSelector(store=>store.user);
    const dispatch = useDispatch();

    const logOutUser = async () =>{
      
      try{
        await axios.get("http://localhost:3000/logout", {withCredentials:true});
        dispatch(removeUser())
      }
      catch(err)
      {
        console.log(err.message)
      }
      
    }

    return <div className="navbar bg-base-300">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">DevTinder🙇</Link>
    </div>
    <div className="flex-none gap-2">
     {user && <div className="dropdown dropdown-end pr-4">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="user_pic"
              src={user.photoURL} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><a>Settings</a></li>
          <li><Link to="/login" onClick={logOutUser}> Logout </Link></li>
        </ul>
      </div>}
    </div>
  </div>
}

export default NavBar;