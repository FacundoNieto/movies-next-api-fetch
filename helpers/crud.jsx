import axiosFetch from "../config/axios";

export const getMovies = async (path) => {
  try {
    const { data } = await axiosFetch(path);
  // console.log("result: >> ", data);
    return data;
  } catch (error) {
    console.log("error.message >> ", error.message );
  }
};