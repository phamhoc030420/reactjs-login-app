import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import PhotoList from "../components/add/photoList";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Images from "../constants/images";
import { removePhoto, updatePhoto } from '../components/add/photoSlice'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
function Home() {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleEdit = (photo) => {
        history.push(`/photos/${photo.id}`);
    }
    const handleDelete = (photo) => {
        const action = removePhoto(photo.id)
        dispatch(action);
        toast.error("Delete Success")
    }
    return (
        <>
            <Header />
            <Banner title="Your awesome photos" backgroundUrl={Images.Anh1} />
            <Container className="text-center">
                <div className="py-5">
                    <Link to='/photos/add' style={{ textDecoration: 'none' }}>Add new photos</Link>
                </div>
                <PhotoList photoList={photos} handleEdit={handleEdit} handleDelete={handleDelete} />

            </Container>
            <Link to='/weather' style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>Weather App</Link>
        </>
    )
}
export default Home;