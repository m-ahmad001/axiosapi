import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

const initialUser = {
    name: '',
    email: '',
    passion: '',
    job:''

}
export default function Post() {
    
    const [state, setState] = useState(initialUser);



    // Handle Set State Use
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const reslt = await axios.post('https://631eee5758a1c0fe9f5b4bc7.mockapi.io/users', state)
        console.log(reslt)
        setState(initialUser)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User Added',
            showConfirmButton: false,
            timer: 1500
          })
       
    }
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 m-auto">
                        <div className="card py-3 px-4 text-center">
                            <h2 className='text-center'>User Registration</h2>
                            <form onSubmit={handleSubmit}>
                                <input value={state.name} placeholder='Enter Your Name' type="text" className='form-control ' name='name' onChange={handleChange} />
                                <input value={state.email} placeholder='Enter Your Email' type="email" className='form-control  my-2' name='email' onChange={handleChange} />
                                <input value={state.passion} placeholder='Passion To Do' type="text" className='form-control ' name='passion' onChange={handleChange} />
                                <input  value={state.job} placeholder='Enter Your Job Title' type="text" className='form-control  my-2' name='job' onChange={handleChange} />
                                <button className='btn btn-primary'> Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
