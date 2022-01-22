import React from "react";
import PhotoList from "./photoList";
import { Button } from 'reactstrap';
import './photoCard.scss'
function PhotoCard(props) {
    const { photo, onEditClick, onRemoveClick } = props;
    const handleEditClick = () => {
        if (onEditClick) {
            onEditClick(photo);
        }
    }
    const handleRemoveClick = () => {
        if (onRemoveClick) {
            onRemoveClick(photo);
        }
    }

    return (
        <>
            <div className="photo">
                <img src={photo.anh} alt={photo.titles} />

                <div className="photo__overlay">
                    <h3 className="photo__title">{photo.titles}</h3>

                    <div className="photo__actions">
                        <div>
                            <Button outline size="sm" color="primary" onClick={handleEditClick}>
                                Edit
                            </Button>
                        </div>

                        <div>
                            <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
                                Remove
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PhotoCard;