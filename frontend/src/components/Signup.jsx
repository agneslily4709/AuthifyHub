import React,{useState} from 'react'

const Signup = () => {
        const [user,setUser] = useState({})
        const handleChange = (e) => {
                setUser({...user,[e.target.name]:e.target.value})
        }
        const handleSubmit = (e) => {
                e.preventDefault()
                console.log(user);
        }
        return (
    <div>
        <h2>SignUp form</h2>
        <form method="POST">
                <input placeholder='Enter name' type='text' onChange={handleChange} name='name'/><br/>
                <input placeholder='Enter email' type='email' onChange={handleChange} name='email'/><br/>
                <input placeholder='Enter password' type='password' onChange={handleChange} name='password'/><br/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )

}

export default Signup