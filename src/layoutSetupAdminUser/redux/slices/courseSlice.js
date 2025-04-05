import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [
    { id: 1, name: "React Basics", description: "Learn React from scratch." },
    { id: 2, name: "Redux Toolkit", description: "Master state management with Redux Toolkit." },
  ],
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    removeCourse: (state, action) => {
      state.courses = state.courses.filter(course => course.id !== action.payload);
    },
    updateCourse: (state, action) => {
      const index = state.courses.findIndex(course => course.id === action.payload.id);
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },
  },
});

export const { addCourse, removeCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;