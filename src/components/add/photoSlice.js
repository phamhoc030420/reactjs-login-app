import { createSlice } from '@reduxjs/toolkit'
const photo = createSlice({
    name: 'photos',
    initialState: [
        {
            id: '1',
            titles: 'This is my picture',
            anh: 'https://picsum.photos/id/1057/200/116',
            category: 'Technology'
        },
        {
            id: '2',
            titles: 'This is my picture',
            anh: 'https://picsum.photos/id/106/200/116',
            category: 'Technology'
        },
        {
            id: '3',
            titles: 'This is my picture',
            anh: 'https://picsum.photos/id/1061/200/116',
            category: 'Technology'
        },
        {
            id: '4',
            titles: 'This is my picture',
            anh: 'https://picsum.photos/id/1063/200/116',
            category: 'Technology'
        }
    ],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            const removePhotoId = action.payload;
            state = state.filter(item => item.id !== removePhotoId);
            return state;
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            const photoIndex = state.findIndex(item => item.id == newPhoto.id);
            if (photoIndex >= 0) {
                state[photoIndex] = newPhoto;
            }
        }
    }
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;