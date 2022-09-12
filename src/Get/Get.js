import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Get() {
    const [responce, setResponce] = useState([]);



    // useeffect
    useEffect(() => {
        axios.get(`https://631eee5758a1c0fe9f5b4bc7.mockapi.io/users`)
            .then((res) => {
                setResponce(res.data)
            })
    });

    //      Update Handler
    const updateHandler = (id) => {
        console.log(id)
        localStorage.setItem('ID', id)
    }

    // Handle Update 
    const [updateUser, setupdateUser] = useState();

    const handleEdit = (item) => {
        setupdateUser(item)
        console.log(item)
    }
    const handleUpdate = () => {
        axios.put(`https://631eee5758a1c0fe9f5b4bc7.mockapi.io/users/${updateUser.id}`, updateUser)
        .then((res)=>console.log(res))
    }

    const handleChange = e => {
        setupdateUser({ ...updateUser, [e.target.name]: e.target.value })
    }

    return (
        <div className='py-4'>
            <div className="contanier">
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 m-auto">
                        <div className="card p-3 text-center">
                            <div className="row"><h1>Users List</h1></div>
                            <div className='table-responsive'>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Passion To Do</th>
                                            <th scope="col">Job Title</th>
                                            <th scope="col">Update</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {responce.length ? responce.map((item) => {

                                            return <tr key={item.id}>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.passion}</td>
                                                <td>{item.job}</td>
                                                <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleEdit(item)}>Update</button></td>
                                            </tr>
                                        }) : <div className='spinner spinner-border'></div>
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal --> */}
            {/* <!-- Modal --> */}
            <div className="modal fade" id="editModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row mb-3">
                                <div className="col">
                                    <input onChange={handleChange} type="text" className="form-control" placeholder="Name" name='name' value={updateUser.name} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input onChange={handleChange} type="email" className="form-control" placeholder="Email" name='email' value={updateUser.email} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input onChange={handleChange} type="text" className="form-control" placeholder="Passion To Do" name='passion' value={updateUser.passion} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input onChange={handleChange} type="text" className="form-control" placeholder="Job" name='job' value={updateUser.job} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=> handleUpdate(updateUser)}>Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
