import { createSlice, createSelector } from "@reduxjs/toolkit";

const rotate = createSlice({
  name: "rotate",
  initialState: {
    rotateX: -30,
    rotateY: 38,
    speedRotate: 1,
  },
  reducers: {
    rotateLeft: (state) => {
      state.rotateX -= 4 * state.speedRotate;
    },
    rotateRight: (state) => {
      state.rotateX += 4 * state.speedRotate;
    },
    rotateTop: (state) => {
      state.rotateY += 4 * state.speedRotate;
    },
    rotateBottom: (state) => {
      state.rotateY -= 4 * state.speedRotate;
    },
    changeSpeedRotate: (state, { payload }) => {
      state.speedRotate = payload;
    },
  },
});

export const rotateSelector = createSelector(
  ({ rotateX }) => rotateX,
  ({ rotateY }) => rotateY,
  (rotateX, rotateY) => ({ rotateX, rotateY })
);

export const {
  actions: { rotateLeft, rotateRight, rotateTop, rotateBottom, changeSpeedRotate },
  reducer,
} = rotate;
