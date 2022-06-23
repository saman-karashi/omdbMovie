import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
movies:null,
loading:false,
error:''
}

export const fetchMovies = createAsyncThunk(
'movies/fetchMovies',
async(search,{rejectWithValue})=>{
try {
const params={
api_key:process.env.REACT_APP_MOVIE_API_KEY,
page:1,
query:search
}

const {data} = await axios('https://api.themoviedb.org/3/search/movie',{params})
return data;
} catch (error) {
return rejectWithValue('Opps there seems something went wrong.')
}
}
)


const fetchMoviesSlice = createSlice({
name:'movies',
initialState,
reducers:{},
extraReducers:{
[fetchMovies.pending]:(state)=>{
state.loading = true;
state.movies=null;
state.error=''
},
[fetchMovies.fulfilled]:(state,{payload})=>{
state.loading = false;
state.error=payload?.results?.length === 0 ? '404 Not found' : ''
state.movies = payload.results;
},
[fetchMovies.rejected]:(state,{payload})=>{
state.loading = false;
state.error=payload
state.movies =null;
}
}
})

export const fetchMoviesReducer = fetchMoviesSlice.reducer;