import { createSlice } from "@reduxjs/toolkit";

const historyReducer = createSlice({
  name: "history",
  initialState:{
    history: []
  },

  reducers: {
    addHistory(state, action){
        state.history.push(action.payload)
        state.history.reverse()
    },
    removeHistory(state, action){
        state.history=state.history.filter(item=>item.id!==action.payload.id)
    },
    clearHistory(state){
      state.history=[]
    }
  },
});

export const { addHistory, removeHistory, clearHistory } = historyReducer.actions;
export default historyReducer.reducer;
