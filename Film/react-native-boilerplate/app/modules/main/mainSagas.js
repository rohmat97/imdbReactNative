import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_FILM,
  GET_FILM_DETAIL,
  GET_FILM_POPULAR,
  GET_FILM_UPCOMING,
} from './mainCons';
import {
  getFilm,
  getFilmFailed,
  getFilmSuccess,
  getFilmDetailFailed,
  getFilmDetailSuccess,
  getFilmUpcoming,
  getFilmUpcomingSuccess,
  getFilmUpcomingFailed,
  getFilmPopular,
  getFilmPopularSuccess,
  getFilmPopularFailed,
} from './mainActions';
import { RESPONSE_STATUS } from '../../utils/constants';
import {
  getListFilmApi,
  getFilmDetailApi,
  getListFilmPopular,
  getListFilmUpcoming,
} from './mainApis';

function* sagagetListFilm(params) {
  try {
    const response = yield call(getListFilmApi, params.payload);
    //console.log("TEST API",response.data.results);
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getFilmSuccess(response.data.results));
        // console.log(response);
        break;
      // default:
      // yield put(getUserFailed(response.data));
    }
  } catch (error) {
    // yield put(getUserFailed(error));
  }
}

function* sagaGetFilmDetail(params) {
  try {
    const response = yield call(getFilmDetailApi, params.payload);
    console.log('data response', response);
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getFilmDetailSuccess(response.data));
        break;
    }
  } catch (error) {
    console.log('data error', error);
    yield put(getFilmDetailFailed(error));
  }
}

function* sagaGetFilmUpcoming(params) {
  try {
    const response = yield call(getListFilmUpcoming, params.payload);
    console.log('data response', response);
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getFilmUpcomingSuccess(response.data.results));
        break;
    }
  } catch (error) {
    console.log('data error', error);
    yield put(getFilmUpcomingFailed(error));
  }
}

function* sagaGetFilmPopular(params) {
  try {
    const response = yield call(getListFilmPopular, params.payload);
    console.log('data response', response);
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getFilmPopularSuccess(response.data.results));
        break;
    }
  } catch (error) {
    console.log('data error', error);
    yield put(getFilmPopularFailed(error));
  }
}

export default [
  takeLatest(GET_FILM, sagagetListFilm),
  takeLatest(GET_FILM_DETAIL, sagaGetFilmDetail),
  takeLatest(GET_FILM_POPULAR, sagaGetFilmPopular),
  takeLatest(GET_FILM_UPCOMING, sagaGetFilmUpcoming),
];
