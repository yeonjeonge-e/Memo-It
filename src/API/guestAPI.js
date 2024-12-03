import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const guestLogin = async () => {
  try {
    const response = await axios.post(`${API_URL}/guest-login`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "게스트 로그인 실패";
  }
};
