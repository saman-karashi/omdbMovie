import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchMovieById = createAsyncThunk(
    'movieById/movie',

    async({movie_id},{rejectWithValue})=>{
    try {
    const params={
    api_key:process.env.REACT_APP_MOVIE_API_KEY,
    append_to_response:'videos'
    }
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`,{params})
    return data;
    } catch (error) {
    throw rejectWithValue('Opps it seems something went wrong.')
    }
    }
)


const initialState = {
movie:null,
error:'',
loading:false
}

const fetchMovieByIdSlice = createSlice({
name:'movieById',
initialState,
extraReducers:{
[fetchMovieById.pending]:(state)=>{
state.loading = true;
},
[fetchMovieById.fulfilled]:(state,{payload})=>{
state.movie = payload;
state.loading = false;
},
[fetchMovieById.rejected]:(state,{payload})=>{
state.error = payload;
state.loading=false;
state.movie=null
}
}
})


export default fetchMovieByIdSlice.reducer;

