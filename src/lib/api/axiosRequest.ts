import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

function formatApiError(error: AxiosError): string {
  const fallbackMessage = "An unexpected error occurred. Please try again.";

  if (error.response?.data) {
    const errorData = error.response.data as Record<string, unknown>;

    if (typeof errorData.errors === "string") {
      return errorData.errors;
    }

    if (typeof errorData.detail === "string") {
      return errorData.detail;
    }

    if (Array.isArray(errorData.detail)) {
      return errorData.detail.join(" ");
    }

    if (typeof errorData.message === "string") {
      return errorData.message;
    }
  }

  if (error.request) {
    return "Could not connect to the server.";
  }

  return error.message || fallbackMessage;
}

const axiosRequest = async <T = unknown>(
  options: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios(options);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = formatApiError(error);
      throw new Error(errorMessage);
    }

    throw new Error("An unexpected error occurred. Please try again.");
  }
};

export default axiosRequest;
