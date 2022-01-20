// import { useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
// import './login.scss'
// import { Button, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
// import Modal from 'react-bootstrap/Modal'
// function ModalAdd(prors) {
//     console.log('Heelo', prors.stateCha);
//     const mang = prors.stateCha;
//     console.log(mang);
//     const [add, addUsers] = useState(prors.stateCha)
//     const [name, setName] = useState('');
//     const [year, setYear] = useState('');
//     const [color, setColor] = useState('');
//     const [pantoneValue, setPantoneValue] = useState('');
//     console.log('cha', add);
//     const handleClose = () => {
//         prors.toggle()
//     }
//     const test = () => { }
//     // console.log(prors.toggleUserModel);
//     const handleSubmit = () => {
//         console.log(name, year, color, pantoneValue);
//     }
//     const handleAddNewUsers = () => {
//         if (name === '' || year === '' || color === '' || pantoneValue === '') {
//             alert('Input empty');
//         }
//         else {
//             const arr = {
//                 'id': Math.random(),
//                 'name': name,
//                 'year': year,
//                 'color': color,
//                 'pantone_value': pantoneValue

//             }
//             const newUsers = [...mang, arr];
//             addUsers(newUsers)
//             setColor('');
//             setName('');
//             setYear('');
//             setPantoneValue('');
//             handleClose();
//             toast.success("Add Success")
//             prors.onChangeState(add)
//             // console.log("add", add);
//             console.log("newadd", newUsers);
//         }

//     }

//     return (
//         <>
//             <Modal show={prors.isOpen} onHide={test} animation={false} className='modal-add-container'>
//                 <Modal.Header closeButton style={{ backgroundColor: 'blue', color: 'white' }}>
//                     <Modal.Title>Add New Users</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div className='container'>
//                         <div className='row'>
//                             <div className='col-6 form-group'>
//                                 <label>Name</label>
//                                 <input className='input1' type='text' value={name} onChange={(e) => setName(e.target.value)} />
//                             </div>
//                             <div className='col-6 form-group'>
//                                 <label>Year</label>
//                                 <input className='input1' type='text' value={year} onChange={(e) => setYear(e.target.value)} />
//                             </div>
//                         </div>
//                         <div className='row'>
//                             <div className='col-6 form-group'>
//                                 <label>Color</label>
//                                 <input className='input1' type='text' value={color} onChange={(e) => setColor(e.target.value)} />
//                             </div>
//                             <div className='col-6 form-group'>
//                                 <label>Pantone_Value</label>
//                                 <input className='input1' type='text' value={pantoneValue} onChange={(e) => setPantoneValue(e.target.value)} />
//                             </div>
//                         </div>
//                     </div>

//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button color='danger' variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button color='primary' variant="primary" onClick={handleAddNewUsers}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }
// export default ModalAdd;

// import { useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
// import './login.scss'
// import { Button, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
// import Modal from 'react-bootstrap/Modal'
// import _ from 'lodash'
// import ModalAdd from './modalAdd'
// function ProFile() {
//     const [user, setUser] = useState([]);
//     const [show, setShow] = useState(false);
//     // state cac thuoc tinh cua users
//     const [name, setName] = useState('');
//     const [year, setYear] = useState('');
//     const [color, setColor] = useState('');
//     const [pantoneValue, setPantoneValue] = useState('');
//     const [id, setId] = useState('');
//     const [names, setNames] = useState('');
//     const [years, setYears] = useState('');
//     const [colors, setColors] = useState('');
//     const [pantoneValues, setPantoneValues] = useState('');
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const toggleUserModel = () => setShow(!show);
//     const [shows, setShows] = useState(false);
//     const handleClose1 = () => setShows(false);
//     const handleShow1 = (e) => {

//         setShows(true)
//         if (e && !_.isEmpty(e)) {
//             setId(e.id)
//             setNames(e.name);
//             setColors(e.color)
//             setYears(e.year)
//             setPantoneValues(e.pantone_value)
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem("Token");
//         toast.success("LogOut Success");
//     }

//     useEffect(() => {
//         async function fetchPostList() {
//             const requesURL = 'https://reqres.in/api/login';
//             const response = await fetch(requesURL);
//             const responseJSON = await response.json();
//             console.log({ responseJSON });
//             const { data } = responseJSON;
//             setUser(data)

//         }
//         fetchPostList();
//     }, [])
//     const handleDelete = (e) => {
//         const newState = [...user];
//         const kq = newState.filter(user => user.id !== e.id);
//         setUser(kq);
//     }


//     const handleEditUser = () => {
//         if (names === '' || years === '' || colors === '' || pantoneValues === '') {
//             alert('Input empty');
//         }
//         else {
//             const arr = {
//                 'id': id,
//                 'name': names,
//                 'year': years,
//                 'color': colors,
//                 'pantone_value': pantoneValues

//             }
//             let newEdit = [...user];
//             const newData = newEdit.findIndex(item => item.id === id);
//             newEdit[newData] = arr;
//             setUser(newEdit);
//             handleClose1();
//             toast.info("Update Success");
//         }
//     }

//     return (
//         <>

//             <div>
//                 <button type='button' onClick={logout} style={{ float: 'right', marginTop: 15, marginRight: 20, borderRadius: 5 }}><i className="fas fa-sign-out-alt"></i> </button>
//                 <Button onClick={handleShow} className='btn' color='primary' style={{ float: 'left', marginTop: 15, marginRight: 20, borderRadius: 5 }}><i className="fas fa-plus"></i> Add new users</Button>
//                 <ModalAdd isOpen={show} toggle={toggleUserModel} stateCha={user} onChangeState={value => setUser(value)} />
//                 {/* <ModalAdd isOpen={show} toggle={toggleUserModel} stateCha={user} /> */}
//                 <h2 style={{ color: 'white', textAlign: 'center', padding: 10 }}>Infomation On API</h2>
//                 <table className="table ">
//                     <thead className='table-dark'>
//                         <tr>
//                             <th scope="col">Name</th>
//                             <th scope="col">Year</th>
//                             <th scope="col">Color</th>
//                             <th scope="col">Pantone_Value</th>
//                             <th scope="col">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody style={{ backgroundColor: 'white' }} >
//                         {user.map((item, index) => (
//                             <tr key={index} className='table_hover'>
//                                 <th scope="row">{item.name}</th>
//                                 <td >{item.year}</td>
//                                 <td>{item.color}</td>
//                                 <td>{item.pantone_value}</td>
//                                 <td>
//                                     {/* edit */}
//                                     <Button onClick={() => handleShow1(item)} style={{ backgroundColor: 'blue', borderRadius: 15 }}> <i className="fas fa-pencil-alt"></i></Button>
//                                     <Modal show={shows} onHide={handleClose1} animation={false} className='modal-user-container'>
//                                         <Modal.Header closeButton style={{ backgroundColor: 'blue', color: 'white' }}>
//                                             <Modal.Title>Edit Users</Modal.Title>
//                                         </Modal.Header>
//                                         <Modal.Body>
//                                             <div className='container'>
//                                                 <div className='row'>
//                                                     <div className='col-6 form-group'>
//                                                         <label>Name</label>
//                                                         <input className='input1' type='text' value={names} onChange={(e) => setNames(e.target.value)} />
//                                                     </div>
//                                                     <div className='col-6 form-group'>
//                                                         <label>Year</label>
//                                                         <input className='input1' type='text' value={years} onChange={(e) => setYears(e.target.value)} />
//                                                     </div>
//                                                 </div>
//                                                 <div className='row'>
//                                                     <div className='col-6 form-group'>
//                                                         <label>Color</label>
//                                                         <input className='input1' type='text' value={colors} onChange={(e) => setColors(e.target.value)} />
//                                                     </div>
//                                                     <div className='col-6 form-group'>
//                                                         <label>Pantone_Value</label>
//                                                         <input className='input1' type='text' value={pantoneValues} onChange={(e) => setPantoneValues(e.target.value)} />
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                         </Modal.Body>
//                                         <Modal.Footer>
//                                             <Button color='danger' variant="secondary" onClick={handleClose1}>
//                                                 Close
//                                             </Button>
//                                             <Button color='primary' variant="primary" onClick={handleEditUser}  >
//                                                 Save Changes
//                                             </Button>
//                                         </Modal.Footer>
//                                     </Modal>
//                                     {/* delete */}
//                                     <Button style={{ backgroundColor: 'red', borderRadius: 15, marginLeft: 60 }} onClick={() => handleDelete(item)}><i className="fas fa-trash-alt"></i></Button>
//                                 </td>
//                             </tr>
//                         ))}


//                     </tbody>
//                 </table>
//             </div>

//         </>
//     )
// }
// export default ProFile;