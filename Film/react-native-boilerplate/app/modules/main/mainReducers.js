/* eslint-disable complexity */
import * as CONS from './mainCons';

const getListFilm = {
  getListFilmFetch: false,
  getListFilmResponse: [],
  getListUserError: null,
};

const getFilmDetail = {
  getFilmDetailFetch: false,
  getFilmDetailParam: null,
  getFilmDetailError: null,
  getFilmDetailResponse: null,
};
const getFilmUpcoming = {
  getFilmUpcomingFetch: false,
  getFilmUpcomingResponse: [],
  getFilmUpcomingError: null,
};
const getFilmPopular = {
  getFilmPopularFetch: false,
  getFilmPopularResponse: [],
  getFilmPopularError: null,
};

const mainInitialState = {
  ...getListFilm,
  ...getFilmDetail,
  ...getFilmPopular,
  ...getFilmUpcoming,
  counter: 0,
  action: '',
};

export const mainReducers = (state = mainInitialState, action) => {
  switch (action.type) {
    // case CONS.INCREASE_COUNTER:
    //   return {
    //     counter: state.counter + 1,
    //     action: action.type,
    //   };
    // case CONS.DECREASE_COUNTER:
    //   return {
    //     counter: state.counter - 1,
    //     action: action.type,
    //   };
    case CONS.GET_FILM:
      return {
        ...state,
        getListFilmFetch: true,
        action: action.type,
      };
    case CONS.GET_FILM_SUCCESS:
      return {
        ...state,
        getListFilmResponse: action.payload,
        getListFilmFetch: false,
        action: action.type,
      };
    case CONS.GET_FILM_FAILED:
      return {
        ...state,
        getListFilmResponse: action.payload,
        getListFilmFetch: false,
        action: action.type,
      };
    case CONS.GET_FILM_DETAIL:
      return {
        ...state,
        getFilmDetailParam: action.payload,
        getFilmDetailFetch: true,
        action: action.type,
      };
    case CONS.GET_FILM_DETAIL_SUCCESS:
      return {
        ...state,
        getFilmDetailResponse: action.payload,
        getFilmDetailFetch: false,
        action: action.type,
      };
    case CONS.GET_FILM_DETAIL_FAILED:
      return {
        ...state,
        getFilmDetailError: action.payload,
        getFilmDetailFetch: false,
        action: action.type,
      };
    case CONS.GET_FILM_POPULAR:
      return {
        ...state,
        getFilmPopularFetch: true,
        action: action.type,
      };
    case CONS.GET_FILM_POPULAR_SUCCESS:
      return {
        ...state,
        getFilmPopularResponse: action.payload,
        getFilmPopularFetch: false,
        action: action.type,
      };
    case CONS.GET_FILM_POPULAR_FAILED:
      return {
        ...state,
        getFilmPopularResponse: action.payload,
        getFilmPopularFetch: false,
        action: action.type,
      };
    case CONS.GET_FILM_UPCOMING:
      return {
        ...state,
        getFilmUpcomingFetch: true,
        action: action.type,
      };
    case CONS.GET_FILM_UPCOMING_SUCCESS:
      return {
        ...state,
        getFilmUpcomingResponse: action.payload,
        getFilmUpcomingFetch: false,
        action: action.type,
      };
    case CONS.GET_FILM_UPCOMING_FAILED:
      return {
        ...state,
        getFilmUpcomingResponse: action.payload,
        getFilmUpcomingFetch: false,
        action: action.type,
      };
    default:
      return state;
  }
};
