import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error.response?.data?.message || '회원가입 실패';
  }
};
