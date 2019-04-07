import { createStore} from 'redux';
import rootReducer from './rootReducer';

// b viets cái gì mà bh mình đọc không hiểu

export const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
// export default store;