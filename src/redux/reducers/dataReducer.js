import {
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM
} from '../types';

const initialState = {
  screams: [],
  scream: {},
  loading: false
};

export default function(state = initialState, action) {
  const { screams, scream } = state;
  const { type, payload } = action;

  switch(type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: payload,
        loading: false
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: payload
      }
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      return {
        ...state,
        screams: screams.map(scream => (
          scream.screamId === payload.screamId ? payload : scream
        )),
        scream: {
          ...(scream.screamId === payload.screamId ? payload : scream)
        }
      };
    case DELETE_SCREAM:
      return {
        ...state,
        screams: screams.filter(scream => scream.screamId !== payload)
      }
    case POST_SCREAM:
      return {
        ...state,
        screams: [
          action.payload,
          ...state.screams
        ]
      }
    default:
      return state;
  }
}
