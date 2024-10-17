import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = ()=>{

    const dispatch = useDispatch();
    const feed =  useSelector(store=>store.feed)

    const getFeed = async () =>{

        if(feed){
            return
        }
        const res = await axios.get("http://localhost:3000/user/feed", {withCredentials:true});
        console.log(res)
        dispatch(addFeed(res.data));
    }

    useEffect(()=>{
        getFeed();
    },[])

    return <>
        <div className="flex m-4 justify-center">
            {feed && feed.map((item, index)=> <UserCard key={index} userData={item}/> )}
        </div>
    </>
}

export default Feed;