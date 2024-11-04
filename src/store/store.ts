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
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store;