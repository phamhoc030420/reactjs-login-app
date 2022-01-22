import React from "react";
import { Row, Col } from 'reactstrap';
import PhotoCard from "./photoCard";
function PhotoList(props) {
    const { photoList, handleEdit, handleDelete } = props;
    return (
        <>
            <Row>
                {photoList.map((item, index) => (
                    <Col key={index} xs="12" md="6" lg="3">
                        <PhotoCard photo={item}
                            onEditClick={handleEdit}
                            onRemoveClick={handleDelete} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default PhotoList;