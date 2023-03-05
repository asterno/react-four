import { combineReducers } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import countReducer from "./reducers/countReducer"


const rootReducer = combineReducers({
 countReducer,
})


 const setupStore = () => {
    return configureStore({
        reducer:rootReducer
    })
 }

 export default setupStore