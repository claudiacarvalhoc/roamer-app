import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';


export interface MenuState {
    projectText: string;
    expandText: string;
    collapseText: string;
    expand: boolean;
}

const initialState: MenuState = {
    projectText: 'New project ⇧⌘P',
    expandText: 'Expand all',
    collapseText: 'Collapse all',
    expand: false,
};


export const menuReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        expand: (state) => {
            state.expand = true;
            console.log('expand clicked!');
        },
        collapse: (state) => {
            state.expand = false;
            console.log('collapse clicked!');
        },
        addProject: (state) => {
            // TODO
            console.log('addProject clicked!');
        },
    },
});

export const { expand, collapse, addProject } = menuReducer.actions;

export const selectProjectText = (state: RootState) => state.menu.projectText;
export const selectExpandText = (state: RootState) => state.menu.expandText;
export const selectCollapseText = (state: RootState) => state.menu.collapseText;

export const selectExpand = (state: RootState) => state.app.expand;
export const selectAppTitle = (state: RootState) => state.app.title;

export default menuReducer.reducer;
