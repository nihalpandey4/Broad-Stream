import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  GET_ALL_STREAMS,
  GET_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
} from "./types";
import streams from "../apis/streams";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  history.push("/")
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const getAllStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({ type: GET_ALL_STREAMS, payload: response.data });
};

export const getStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: GET_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};

export const updateStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: UPDATE_STREAM, payload: response.data });
  history.push("/");
};