

import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './login.scss'
import { Button, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Modal from 'react-bootstrap/Modal'
import _ from 'lodash'
import Login from './login'
// import logo from '../image'
function ProFile(props) {
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    // state cac thuoc tinh cua users
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [id, setId] = useState('');
    const [emails, setEmails] = useState('');
    const [first_names, setFirstNames] = useState('');
    const [last_names, setLastNames] = useState('');
    const [avatars, setAvatars] = useState('');
    const [pages, setPage] = useState(1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [shows, setShows] = useState(false);
    const handleClose1 = () => setShows(false);
    console.log("page", pages);
    const handleShow1 = (e) => {

        setShows(true)
        if (e && !_.isEmpty(e)) {
            setId(e.id)
            setEmails(e.email);
            setFirstNames(e.last_name)
            setLastNames(e.first_name)
            setAvatars(e.avatar)
        }
    };

    const logout = () => {
        localStorage.removeItem("Token");
        toast.success("LogOut Success");
        props.onLogoutSucess();
    }

    useEffect(() => {
        async function fetchPostList() {
            const requesURL = `https://reqres.in/api/users?page=${pages}`;
            const response = await fetch(requesURL);
            const responseJSON = await response.json();
            const { data } = responseJSON;
            setUser(data)
            console.log(data);
            console.log(pages);

        }
        fetchPostList();
    }, [pages])
    const handleDelete = (e) => {
        const newState = [...user];
        const kq = newState.filter(user => user.id !== e.id);
        setUser(kq);
        toast.success("Delete Success")
    }

    const handleAddNewUsers = () => {
        if (email === '' || first_name === '' || last_name === '' || avatar === '') {
            alert('Input empty');
        }
        else {
            const arr = {
                'id': Math.random(),
                'email': email,
                'first_name': first_name,
                'last_name': last_name,
                'avatar': avatar

            }
            console.log(avatar);
            const newUsers = [...user, arr];
            setUser(newUsers)
            setLastName('');
            setEmail('');
            setFirstName('');
            setAvatar('');
            handleClose();
            toast.success("Add Success")
        }

    }
    const handleEditUser = () => {
        if (emails === '' || first_names === '' || last_names === '' || avatars === '') {
            alert('Input empty');
        }
        else {
            const arr = {
                'id': id,
                'email': emails,
                'first_name': first_names,
                'last_name': last_names,
                'avatar': avatars

            }
            let newEdit = [...user];
            const newData = newEdit.findIndex(item => item.id === id);
            newEdit[newData] = arr;
            setUser(newEdit);
            handleClose1();
            toast.info("Update Success");
        }
    }


    return (
        <>
            <div>
                <button type='button' onClick={logout} style={{ float: 'right', marginTop: 15, marginRight: 20, borderRadius: 5 }}><i className="fas fa-sign-out-alt"></i> </button>
                <Button onClick={handleShow} className='btn' color='primary' style={{ float: 'left', marginTop: 15, marginRight: 20, borderRadius: 5 }}><i className="fas fa-plus"></i> Add new users</Button>
                <Modal show={show} onHide={handleClose} animation={false} className='modal-user-container'>
                    <Modal.Header closeButton style={{ backgroundColor: 'blue', last_name: 'white' }}>
                        <Modal.Title>Add New Users</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>Email</label>
                                    <input className='input1' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>First_Name</label>
                                    <input className='input1' type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>Last_Name</label>
                                    <input className='input1' type='text' value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Avatar</label>
                                    <input style={{ width: 200 }} className='input1' type='text' value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                                    {/* <input style={{ width: 200 }} className='input1' type='file' value={avatar} onChange={handleAvatar} /> */}
                                </div>
                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button color='danger' variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button color='primary' variant="primary" onClick={handleAddNewUsers}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <h2 style={{ color: 'white', textAlign: 'center', padding: 10 }}>Infomation On API</h2>
                <table className="table ">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">First_name</th>
                            <th scope="col">Last_name</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'white' }} >
                        {user.map((item, index) => (
                            <tr key={index} className='table_hover'>
                                <th scope="row">{item.email}</th>
                                <td >{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td><img style={{ width: 50, height: 50 }} src={item.avatar} /></td>
                                <td>
                                    {/* edit */}
                                    <Button key={index} onClick={() => handleShow1(item)} style={{ backgroundColor: 'blue', borderRadius: 15 }}> <i className="fas fa-pencil-alt"></i></Button>

                                    {/* delete */}
                                    <Button style={{ backgroundColor: 'red', borderRadius: 15, marginLeft: 60 }} onClick={() => handleDelete(item)}><i className="fas fa-trash-alt"></i></Button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
                {/* modal edit */}
                <Modal show={shows} onHide={handleClose1} animation={false} className='modal-user-container'>
                    <Modal.Header closeButton style={{ backgroundColor: 'blue', last_name: 'white' }}>
                        <Modal.Title>Edit Users</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>Email</label>
                                    <input className='input1' type='text' value={emails} onChange={(e) => setEmails(e.target.value)} />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>First_name</label>
                                    <input className='input1' type='text' value={first_names} onChange={(e) => setFirstNames(e.target.value)} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>Last_name</label>
                                    <input className='input1' type='text' value={last_names} onChange={(e) => setLastNames(e.target.value)} />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Avatar</label>
                                    <input className='input1' type='text' value={avatars} onChange={(e) => setAvatars(e.target.value)} />
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button color='danger' variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                        <Button color='primary' variant="primary" onClick={handleEditUser}  >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <ul class="pagination">
                    <li class="page-item" >
                        <button class="page-link" aria-label="Previous" onClick={() => setPage(1)} disabled={pages === 1 ? true : false} >
                            <span aria-hidden="true">&laquo; Previous</span>
                        </button>
                    </li>

                    <li class="page-item">
                        <button class="page-link" aria-label="Previous" onClick={() => setPage(2)} disabled={pages === 2 ? true : false}>
                            <span aria-hidden="true">Next &raquo; </span>

                        </button>
                    </li>
                </ul>


            </div>
        </>
    )
}
export default ProFile;

