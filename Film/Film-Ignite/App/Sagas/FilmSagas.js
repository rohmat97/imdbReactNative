/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put, select } from 'redux-saga/effects'
import FilmActions from '../Redux/FilmRedux'
import { FilmSelectors } from '../Redux/FilmRedux'

export function * getFilm (api, action) {
  const { data } = action
  // get current data from Store
  // const currentData = yield select(FilmSelectors.getData)
  // make the call to the api
  const response = yield call(api.getListFilmApi)
// console.log("RESPON",response)
  // success?
  if (response.status === 200) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(FilmActions.filmSuccess(response.data.results))
    // console.log("SUKSES",response.data.results)
  } else {
    yield put(FilmActions.filmFailure())
    console.log("GAGAL",response)
  }
}
