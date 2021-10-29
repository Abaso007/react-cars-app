import { createSlice } from "@reduxjs/toolkit"
import { IhomePageState } from "./type"

const initialState: IhomePageState = {
  topCars: [],
}

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action: any) => {
      state.topCars = action.payload
    },
  },
})

export const { setTopCars } = homePageSlice.actions
export default homePageSlice.reducer
