import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import requestApi from '~/helpers/api';

const currentSong = {
  id: null,
  path: '',
  name: '',
  thumb: '',
  author: '',
  isFavorite: false,
};

const initialStates = {
  queue: [],
  allSongs: [],
  remainingSongs: [],
  currentSong: currentSong,
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: 1,
  locationKey: 'default',
};

export const getSongs = createAsyncThunk('listen/getSongs', async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:9000/songs');
    return response.data.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const editSong = createAsyncThunk('listen/editSong', async (reqData, thunkAPI) => {
  try {
    await requestApi(`songs/${reqData.songId}`, 'PUT', reqData.data);
    const response = {
      id: reqData.songId,
      name: reqData.data.name,
    };
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const deleteSong = createAsyncThunk('listen/deleteSong', async (reqData, thunkAPI) => {
  try {
    const response = await requestApi(`songs/${reqData}`, 'DELETE');
    console.log(response);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const handleUploadSong = createAsyncThunk('listen/uploadSong', async (body, thunkAPI) => {
  try {
    const response = await requestApi('songs', 'POST', body);
    console.log(response);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const listenSlice = createSlice({
  name: 'listen',
  initialState: initialStates,
  reducers: {
    setCurrentSong: (state, action) => {
      const song = action.payload;
      const index = state.queue.findIndex((item) => item.id === song.id);
      state.currentSong = song;
      state.currentIndex = index;
    },
    nextSong: (state) => {
      if (state.currentIndex + 1 === state.queue.length) {
        state.currentSong = state.queue[0];
        state.currentIndex = 0;
      } else {
        state.currentSong = state.queue[state.currentIndex + 1];
        state.currentIndex = state.currentIndex + 1;
      }
    },
    prevSong: (state) => {
      if (state.currentIndex - 1 < 0) {
        state.currentSong = state.queue[state.queue.length - 1];
        state.currentIndex = state.queue.length - 1;
      } else {
        state.currentSong = state.queue[state.currentIndex - 1];
        state.currentIndex = state.currentIndex - 1;
      }
    },

    playSong: (state) => void (state.isPlaying = true),
    pauseSong: (state) => void (state.isPlaying = false),

    randomOn: (state) => void (state.isRandom = true),
    randomOff: (state) => void (state.isRandom = false),

    noRepeat: (state) => void (state.isRepeat = 1),
    repeatAll: (state) => void (state.isRepeat = 2),
    repeatOne: (state) => void (state.isRepeat = 3),
    setQueue: (state, action) => {
      state.queue = action.payload;
    },
    addSongToQueue: (state, action) => {
      state.queue.push(action.payload);
      state.remainingSongs = state.remainingSongs.filter((song) => {
        if ((song.id = action.payload.id)) return false;
        else return true;
      });
    },
    setLocationKey: (state, action) => {
      state.locationKey = action.payload;
    },
  },

  extraReducers(bullder) {
    bullder
      .addCase(getSongs.fulfilled, (state, action) => {
        state.allSongs = action.payload;
        state.queue = action.payload;
        state.currentSong = action.payload[0];
        state.currentIndex = 0;
      })
      .addCase(editSong.fulfilled, (state, action) => {
        state.queue.forEach((song) => {
          if (song.id === action.payload.id) {
            song.name = action.payload.name;
          }
        });
      });
  },
});

export const {
  setCurrentSong,
  nextSong,
  prevSong,
  playSong,
  pauseSong,
  randomOn,
  randomOff,
  noRepeat,
  repeatAll,
  repeatOne,
  setQueue,
  addSongToQueue,
  setLocationKey,
} = listenSlice.actions;
export default listenSlice.reducer;
