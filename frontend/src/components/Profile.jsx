import React, { useEffect, useState } from 'react'
import getCookie from "../Utils/helper.js"

const Profile = () => {

        const [profile,setProfile] = useState({})
        const token = getCookie("token")
            useEffect(()=>{
                fetch(`http://localhost:5000/api/profile`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                    })
                        .then(response => response.json())
                        .then(data =>  setProfile(data))
                        .catch(error => console.error('Error:', error));
            },[])
  return (
    <div>
        <h2>Profile</h2>
        <p>{profile.fullName}</p>
        <p>{profile.email}</p>
        <p>{profile.id}</p>
    </div>
  )
}

export default Profile