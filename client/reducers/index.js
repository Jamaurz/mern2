import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import common from "./commonReducer"
import auth from "./authReducer"

export default combineReducers({
    routing: routerReducer,
    common,
    auth
})
