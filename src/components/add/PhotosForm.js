import React, { useState } from "react";
import { Button, Form, Input, Label, FormGroup } from "reactstrap"
import Select from 'react-select'
import { PHOTO_CATEGORY } from "../../constants/gobal";
import Images from "../../constants/images";
import { $CombinedState } from "@reduxjs/toolkit";
import * as Yup from 'yup';
function PhotosFrom(props) {
    const [anh, setAnh] = useState('https://i.imgur.com/41XtYQ0.jpg');
    const [titles, setTitles] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [id, setId] = useState(null);
    const handleRandom = () => {
        const randomId = Math.trunc(Math.random() * 2000);
        const urls = `https://picsum.photos/id/${randomId}/200/116`;
        setAnh(urls);
        setId(randomId);

    }
    const handleSetCate = (e) => {
        const cate = e ? e.label : e;
        setCategory(cate);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titles) { setError("Vui lòng kiểm tra thông tin nhập title"); }
        else if (!category) { setError("Vui lòng kiểm tra thông tin nhập category"); }
        else if (!anh) { setError("Vui lòng chọn ảnh khác"); }

        else {
            const text = {
                id: id,
                titles: titles,
                category: category,
                anh: anh
            };
            setTitles('');
            setCategory('');
            setAnh('');
            setError('');
            props.onSubmits(text);
        }
    }

    return (<>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Title </Label>
                <Input placeholder="Enter your title" onChange={(e) => setTitles(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label>Category </Label>
                <Select placeholder="What's your photos category" options={PHOTO_CATEGORY} id='cate' onChange={(e) => handleSetCate(e)} />
            </FormGroup>
            <FormGroup>
                <Label>Photo </Label>
                <br></br>
                <Button outline color="primary" type="button" onClick={handleRandom}>Random your photo</Button>
                <br></br>
                <br></br>
                <img src={anh ? anh : `https://i.imgur.com/41XtYQ0.jpg`} style={{ width: 170, height: 116 }} />
            </FormGroup>
            <FormGroup>
                <Button color="primary" type="submit" >Add your photo</Button>
            </FormGroup>
            <p style={{ color: 'red', fontStyle: 'italic' }}>{error}</p>

        </Form>
    </>)
}
export default PhotosFrom;