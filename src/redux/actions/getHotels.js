import axios from 'axios';
import { showToast } from '../../utils';
import { GOOGLE_MAPS_APIKEY } from '../../utils/config';
import { GET_HOTEL_ATTEMPT, GET_HOTEL_SUCCESS } from '../types'

let allHotels = []
export const getHotels = (pagetoken) => {
  return async (dispatch) => {
    dispatch({ type: GET_HOTEL_ATTEMPT });
    try {
      const res = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
          keyword: 'hotel',
          location: '30.167680796968423, 31.421865966292852',
          radius: '15000', //m
          type: 'hotel',
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
          pagetoken,
        }
      })
      if (res?.data?.results.length > 0) {
        pagetoken == '' || pagetoken == undefined ? allHotels = res?.data?.results :
          allHotels = [...allHotels, ...res?.data?.results]
        dispatch({
          type: GET_HOTEL_SUCCESS,
          hotels: allHotels,
          nextPage: res?.data?.next_page_token
        });
      }
      else {
        dispatch({ type: GET_HOTEL_SUCCESS, hotels: [], nextPage: '' });
      }


    } catch (error) {
    }

  }
}
