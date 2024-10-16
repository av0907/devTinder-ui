import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import Error from "./Error";

const Body = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(store => store.user)
    const getUserData = async ()=>{

        try{
            if(userData)
                return
            const res = await axios.get("http://localhost:3000/profile/view", {withCredentials:true});
            dispatch(addUser(res.data));
        }
        catch(err)
        {
            if(err.status === 401)
            {
                navigate("/login")
            }
            <Error/>
            console.log("Error :"+err.message);
        }


    }

    useEffect(()=>{
        getUserData();
    }, [])
    return <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
}

export default Body;