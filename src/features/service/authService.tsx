import axios from "axios";

const API_URL = "http://localhost:3001/users/";

// Register User
const register = async (userData: any) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData: any) => {
  const response = await axios.get(API_URL + "login", {
    params: { email: userData.email, password: userData.password },
  });

  if (response.data) {
    localStorage.setItem("token", response.data.token);
  }
};

const authService = {
  register,
  login,
};

export default authService;
