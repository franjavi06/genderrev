import { publicRequest, userRequest } from "../../requestMethods";
import {
  getVotosStart,
  getVotosSuccess,
  getVotosFailure,
  deleteVotoStart,
  deleteVotoSuccess,
  deleteVotoFailure,
  updateVotoStart,
  updateVotoSuccess,
  updateVotoFailure,
  addVotoStart,
  addVotoSuccess,
  addVotoFailure,
} from "../votoSlice";

export const getVotos = async (dispatch) => {
  dispatch(getVotosStart());
  try {
    const res = await publicRequest.get("/votos");
    dispatch(getVotosSuccess(res.data));
  } catch (err) {
    dispatch(getVotosFailure());
  }
};

export const deleteVoto = async (id, dispatch) => {
  dispatch(deleteVotoStart());
  try {
    //const res = await publicRequest.delete(`/productos/${id}`);
    dispatch(deleteVotoSuccess(id));
  } catch (err) {
    dispatch(deleteVotoFailure());
  }
};

export const updateVoto = async (id, voto, dispatch) => {
  dispatch(updateVotoStart());
  try {
    // update
    dispatch(updateVotoSuccess({ id, voto }));
  } catch (err) {
    dispatch(updateVotoFailure());
  }
};

export const addVoto = async (voto, dispatch) => {
  dispatch(addVotoStart());

  try {
    const res = await publicRequest.post("/votos", voto);
    dispatch(addVotoSuccess(res.data));
  } catch (err) {
    dispatch(addVotoFailure());
    console.log(err);
  }
};
