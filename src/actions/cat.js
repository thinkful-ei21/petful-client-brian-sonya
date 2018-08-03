import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const fetchCatSuccess = (data) => ({
  type: FETCH_CAT_SUCCESS,
  data
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'
export const fetchCatError = (err) => ({
  type: FETCH_CAT_ERROR,
  err
})

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
})

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST'
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS'
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS
})

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR'
export const adoptCatError = () => ({
  type: ADOPT_CAT_ERROR
})

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch('/api/cat').then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(cat => {
    dispatch(fetchCatSuccess(cat));
  }).catch(err => {
    dispatch(fetchCatError(err));
  });
}

export const adoptCatFectch = () => dispatch => {
  fetch('/api/dog', {
    method: 'DELETE',
    headers: {'Accept': 'application/json'},
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res;
  }).then(res => {
    dispatch(adoptCatSuccess(res));
  }).catch (err => {
    dispatch(adoptCatError(err));
  });
    
}


/* Add asynchronous adoptCat and adoptDog actions (and corresponding synchronous actions) which use 
the Fetch API to DELETE an animal at the appropriate endpoint.
Once the delete request is successful, it should, dispatch fetchCat() or fetchDog() as appropriate to 
make the next animal available.*/






/*export const fetchBoard = () => dispatch => {
    dispatch(fetchBoardRequest());
    fetch('/board').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(board => {
        dispatch(fetchBoardSuccess(board));
    }).catch(err => {
        dispatch(fetchBoardError(err));
    });
};*/