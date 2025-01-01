import axios, { AxiosResponse } from "axios";

import { APIMethods } from "@src/constants/enums";

const API = async <T>(method: APIMethods, url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.request<T>({
      baseURL: import.meta.env.VITE_BASE_URL,
      method,
      url,
    });
    return response.data;
  } catch (error) {
    // OR operator is used to instead of nullish because the error object can be empty.
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || error.message || "An error occurred"
      );
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export default API;
