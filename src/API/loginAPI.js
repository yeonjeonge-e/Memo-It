import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "로그인 실패";
  }
};
