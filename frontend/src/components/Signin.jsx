import React, { useState } from 'react'

const Signin = () => {
        const [user,setUser] = useState({})

        const handleChange = (e) => {
                setUser({...user,[e.target.name]:e.target.value})
        }

        const handleSubmit = (e) => {
                e.preventDefault();
                console.log(user);
            
                fetch(`http://localhost:5000/api/signin`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                })
                .then(response => {
                        document.cookie = `token=${response.headers.get('X-Auth-Token')}; path=/`;
                        return response.json()
                })
                .catch(error => console.log('Error:', error));
        }
            
        return (
    <div>
        <h2>SignIn form</h2>
        <form method="POST">
                <input placeholder='Enter email' type='email' onChange={handleChange} name='email'/><br/>
                <input placeholder='Enter password' type='password' onChange={handleChange} name='password'/><br/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
export default Signin