import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";


const Login = () =>{

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

   async  function handleLogin()
    {
        try{
            const data = {
                emailId, password
            }
            const res = await axios.post("http://localhost:3000/login", data, {withCredentials:true})
            dispatch(addUser(res.data))
            return navigate("/")
        }
        catch(err)
        {
            console.log("ERROR: "+err.message);
        }
        
    }
    return <>
    <div> 
        <div className="card bg-neutral text-neutral-content w-96 flex items-center justify-center my-10 mx-[36%]">
            <div className="card-body items-center text-center bg-gray-200">
                <h2 className="card-title text-gray-600">Login</h2>
                <div className="card-actions justify-center ">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email Id {emailId} </span>
                        </div>
                        <input type="text" value={emailId} onChange={(e)=>{setEmailId(e.target.value)}} placeholder="Type here" className="input input-bordered w-full max-w-xs text-black bg-slate-200 " />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Password {password}</span>
                        </div>
                        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Type here" className="input input-bordered w-full max-w-xs text-black bg-slate-200" />
                    </label>
                    <div className="mt-3">
                        <button className="btn btn-primary mx-4" onClick={()=>{handleLogin()}}>Accept</button>
                        <button className="btn btn-error">Deny</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Login;