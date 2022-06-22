import {configureStore} from '@reduxjs/toolkit';
import {fetchMoviesReducer} from '../features/fetchMoviesSlice';
import fetchMovieByIdReducer from '../features/fetchMovieByIdSlice'

const store = configureStore({
reducer:{
fetchMovies:fetchMoviesReducer,
fetchMovieByIdReducer
},
})


export default store;