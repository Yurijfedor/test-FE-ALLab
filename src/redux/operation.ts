import axios from "axios";

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL =
  "https://api.json-generator.com/templates/ZM1r0eic3XEy";

export const fetchJobs = () => async (dispatch: any) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get(
      "/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    );
    dispatch(fetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchingError(error.message));
  }
};
