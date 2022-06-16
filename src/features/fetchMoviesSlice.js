import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
movies:null,
loading:false,
error:''
}



export const fetchMoviesHandler = createAsyncThunk(
'movies/fetchMovies',
async(search,{rejectWithValue})=>{
try {
const params={
api_key:process.env.REACT_APP_MOVIE_API_KEY,
page:1,
query:search
}

const {data} = await axios('https://api.themoviedb.org/3/search/movie',{params})
return data
    
} catch (error) {
return rejectWithValue('Opps there seems something went wrong.')
}

}
)


const fetchMoviesSlice = createSlice({
name:'movies',
initialState,
reducers:{
    resetStore:(state)=>{
    state.error='';
    state.loading=false;
    state.movies=null;
    }
},
extraReducers:{
    [fetchMoviesHandler.pending]:(state)=>{
    state.loading = true;
    state.movies=null;
    state.error=''
    },
    [fetchMoviesHandler.fulfilled]:(state,{payload})=>{
    state.loading = false;
    state.error=''
    state.movies = payload.results;
    },
    [fetchMoviesHandler.rejected]:(state,{payload})=>{
    state.loading = false;
    state.error=payload
    state.movies =null;
    }
}
})


export const {resetStore} = fetchMoviesSlice.actions;

export const fetchMoviesReducer = fetchMoviesSlice.reducer;