import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const fetchDogSuccess = (data) => ({
  type: FETCH_DOG_SUCCESS,
  data
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'
export const fetchDogError = (err) => ({
  type: FETCH_DOG_ERROR,
  err
})

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST,
})

export const ADOPT_DOG = 'ADOPT_DOG'
export const adoptDog = () => ({
  type: ADOPT_DOG
})

export const fetchDog = () => dispatch => {
  fetch('/api/dog').then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(cat => {
    dispatch(fetchDogSuccess(cat));
  }).catch(err => {
    dispatch(fetchDogError(err));
  });
}