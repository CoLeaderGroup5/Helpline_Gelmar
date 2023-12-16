// generate axios api client class

import axios from "axios";
import { AxiosInstance } from "axios";

export default class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000/",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  get(url, params = {}) {
    return this.api.get(url, { params });
  }

  post(url, data = {}) {
    return this.api.post(url, data);
  }
}

export const apiService = new ApiService();
