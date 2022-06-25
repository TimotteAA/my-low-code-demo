import { createSlice } from "@reduxjs/toolkit";
import { IStoreComponentProps } from "../../../type";

interface InitialStateType {
  ComponentsLists: IStoreComponentProps[];
  currentIndex: number;
  currentComponent: IStoreComponentProps | null;
}

const initialState: InitialStateType = {
  ComponentsLists: [],
  currentIndex: 0,
  currentComponent: null,
};

const editSlice = createSlice({
  name: "editComponent",
  initialState,
  reducers: {
    addComponent(state, action) {
      console.log(action.payload);
      const ComponentsList = state.ComponentsLists;
      state.ComponentsLists = [...ComponentsList, action.payload];
    },
    updateComponent(state, action) {
      const { index, componentStyles } = action.payload;
      const ComponentsList = state.ComponentsLists;
      const newComponent = { ...ComponentsList[index], style: componentStyles };
      ComponentsList[index] = newComponent;
      state.ComponentsLists = [...ComponentsList];
    },
    clearCurrentComponent(state) {
      state.currentIndex = -1;
      state.currentComponent = null;
    },
    setCurrentComponent(state, action) {
      const { idx } = action.payload;
      state.currentIndex = idx;
      state.currentComponent = state.ComponentsLists[idx];
    },
    updateCurrentComponentText(state, action) {
      const { text } = action.payload;
      const currentComponent = state.currentComponent;
      if (currentComponent) {
        const index = state.currentIndex;
        const newComponent = { ...currentComponent, componentInnerText: text };
        const ComponentsList = state.ComponentsLists;
        ComponentsList[index] = newComponent;
        state.ComponentsLists = [...ComponentsList];
        state.currentComponent = newComponent;
      }
    },
  },
  extraReducers: (builder) => {},
});

const {
  addComponent,
  updateComponent,
  clearCurrentComponent,
  setCurrentComponent,
  updateCurrentComponentText,
} = editSlice.actions;
export {
  addComponent,
  updateComponent,
  clearCurrentComponent,
  setCurrentComponent,
  updateCurrentComponentText,
};
export default editSlice.reducer;
