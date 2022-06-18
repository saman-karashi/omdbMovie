import {configureStore} from '@reduxjs/toolkit';
import {fetchMoviesReducer} from '../features/fetchMoviesSlice';

const store = configureStore({
reducer:{
fetchMovies:fetchMoviesReducer
},
})


export default store;