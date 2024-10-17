const UserCard = (  userData  )=>{ 


    const {firstName, photoURL, status, age, gender } = userData.userData;
    console.log("uD",userData);
    console.log('FN', firstName)
    console.log('URL', photoURL)
    console.log('status', status)
    return <>

        <div className="h-[500px] mx-4 my-10 card bg-base-300 w-96 shadow-xl justify-center">
        <figure>
            <img
            src={photoURL}
            alt="user-pic" className="w-full object-cover h-[300px]" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName}</h2>
            <p>{status}</p>
            <p>{age + ","+ gender}</p>
            <div className="card-actions justify-between">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
            </div>
        </div>
        </div>
        
    </>
}

export default UserCard;