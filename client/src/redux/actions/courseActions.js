import axios from "axios";
import * as actionTypes from "../constants/courseConstant";

const URL = "https://freecodecamp-clone.onrender.com";

export const getCourses = () => async (dispatch) =>{
    try {
        const {data} = await axios.get(`${URL}/courses`);
        dispatch({
            type: actionTypes.GET_COURSE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_COURSE_FAIL,
            payload: error.message
        });
    }
}