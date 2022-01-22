import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import PhotoList from "../components/add/photoList";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Images from "../constants/images";
import { removePhoto, updatePhoto } from '../components/add/photoSlice'
function Home() {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    console.log('list', photos);
    const handleEdit = (photo) => {
        const action = updatePhoto(photo)
        dispatch(action)
    }
    const handleDelete = (photo) => {
        const action = removePhoto(photo.id)
        dispatch(action);
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
        </>
    )
}
export default Home;