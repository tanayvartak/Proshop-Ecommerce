import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
<<<<<<< HEAD
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
=======
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d
} from "../constants/productConstants.js";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messgae,
    });
  }
};
<<<<<<< HEAD


export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.messgae,
    });
  }
};

=======
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d
