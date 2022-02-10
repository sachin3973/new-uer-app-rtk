import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
  {
    id: 1,
    name: "John",
    email: "Doe",
    age: 25,
    image:
      "https://www.nari-icmr.res.in/UploadedFilesRepository/39ff71e1-c25a-0961-f598-f423d212cfa8.jpg",
  },
  {
    id: 2,
    name: "Sachin",
    email: "Sharma",
    age: 22,
    image:
      "https://www.nari-icmr.res.in/UploadedFilesRepository/39ff71e1-c25a-0961-f598-f423d212cfa8.jpg",
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
          user.email = action.payload.email;
          user.age = action.payload.age;
          user.image = action.payload.image;
        }
        return user;
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
