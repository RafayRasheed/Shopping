import { configureStore } from '@reduxjs/toolkit'
import history_reducer from './history_reducer';


const store = configureStore({
  reducer:{
    history: history_reducer,
  }
})
export default store;