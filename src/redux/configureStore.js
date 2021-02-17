import { createStore, combineReducers } from 'redux';
import { createForms } from 'react-redux-form'; 
import { Comments } from './reducers/comments';
import { initialForm } from './form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            ...createForms({
                blankForm : initialForm
            })
        }
    ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};