import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "reactstrap";
import PhotosFrom from "../components/add/PhotosForm";
import { addPhoto } from "../components/add/photoSlice";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Images from "../constants/images";
function Add() {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (value) => {
        const action = addPhoto(value);
        console.log(action);
        dispatch(action);
        history.push('/photos');
    }
    return (
        <>
            <Header />
            <Banner title="Pick your amazing photo" />
            <div className="photo-edit" style={{ width: 400, marginTop: 20, margin: 'auto', backgroundColor: 'white' }}>
                <PhotosFrom onSubmits={handleSubmit} />

            </div>
        </>
    )
}
export default Add;