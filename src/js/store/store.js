import { legacy_createStore as createStore , applyMiddleware,compose} from "redux";
import rootReducer from "../Reducer";
import thunk from 'redux-thunk'

const MiddelWare=[thunk]

const store=createStore(rootReducer,
    compose(applyMiddleware(...MiddelWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
    ));

export default store; 