import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/login";

export async function login({ correoElectronico, contrasena }) {
  return axios.post(API_URL, { correoElectronico, contrasena });
}
