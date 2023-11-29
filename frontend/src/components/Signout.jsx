import React from 'react'
import getCookie from "../Utils/helper.js"

const Signout = () => {
        const token = getCookie("token")
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    fetch('http://localhost:5000/api/signout', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
})      
    .then(response => response.json())
    .then(data => console.log('Signout successful'))
    .catch(error => console.error('Error:', error));

  return (
    <div>Signout</div>
  )
}

export default Signout