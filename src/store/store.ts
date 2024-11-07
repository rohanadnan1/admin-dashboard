import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import messageSlice from './slices/messageSlice'
import chatSlice from './slices/chatSlice'
import usersSlice from './slices/usersSlice'
import { thunk } from 'redux-thunk'

const store = configureStore({
    reducer: {
        message: messageSlice.reducer,
        chats: chatSlice.reducer,
        users: usersSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),  // Add the thunk middleware to  handle async actions
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()  // Export a hook that can be reused to dispatch actions
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector  // Export a hook that can be reused to select data from the store


export default store;