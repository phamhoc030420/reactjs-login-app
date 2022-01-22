import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "reactstrap";
import PhotosFrom from "../components/add/PhotosForm";
import { addPhoto, updatePhoto } from "../components/add/photoSlice";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Images from "../constants/images";
function Add() {
    const dispatch = useDispatch();
    const history = useHistory();
    //edit
    const { photoId } = useParams();
    const isAdd = !photoId;
    const editValue = useSelector(state => state.photos.find(x => x.id == photoId)
    );
    const initialValue = isAdd ? {} : editValue;
    const randomNumber = () => {
        return Math.floor(Math.random() * 999999 + 100000);
    }
    const handleSubmit = (value) => {
        if (isAdd) {
            const newPhoto = { ...value, id: randomNumber() };
            const action = addPhoto(newPhoto);
            console.log(action);
            dispatch(action);
            history.push('/photos');
        }
        else {
            const newPhoto = { ...value, id: photoId };
            const action = updatePhoto(newPhoto);
            dispatch(action);
            history.push('/photos');
        }

    }

    return (
        <>
            <Header />
            <Banner title="Pick your amazing photo" />
            <div className="photo-edit" style={{ width: 400, marginTop: 20, margin: 'auto', backgroundColor: 'white' }}>
                <PhotosFrom initialValue={initialValue} onSubmits={handleSubmit} is={isAdd} />

            </div>
        </>
    )
}
export default Add;