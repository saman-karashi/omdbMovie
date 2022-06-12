import {configureStore} from '@reduxjs/toolkit';
import {fetchMoviesReducer} from '../features/fetchMoviesSlice';

const store = configureStore({
reducer:{
fetchMoviesReducer
},
})


export default store;