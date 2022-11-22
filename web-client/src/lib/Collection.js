import axios from 'axios';

const API_SERVER = process.env.REACT_APP_SERVER;

const axiosInstance = axios.create({
  baseURL: API_SERVER, // "http://localhost:5000/api/v1"
});

class Tasks {

  async getIndex() {
    if (axiosInstance.defaults.headers.common["Authorization"]) {
      let response = await axiosInstance.get(`/tasks`);
      const data = response.data;
      return data;
    } else {
      throw Error("No authorization on request", "getIndex");
    }
  }

  async get(id) {
    if (axiosInstance.defaults.headers.common["Authorization"]) {
      let response = await axiosInstance.get(`/tasks/${id}`);
      return response.data;
    } else {
      throw Error("No authorization on request", "get", id);
    }
  }

  async create(task) { 
    if (axiosInstance.defaults.headers.common["Authorization"]) {
      const response = await axiosInstance.post(`/tasks`, task);
      const data = response.data;
      return data;
    } else {
      throw Error("No authorization on request", "create", task);
    }
  }

  async update(task) { 
    if (axiosInstance.defaults.headers.common["Authorization"]) {
      const data = await axiosInstance.put(`/tasks/${task._id}`, task);
      return data;
    } else {
      throw Error("No authorization on request", "update", task);
    }
  }

  async delete(_id) {
    if (axiosInstance.defaults.headers.common["Authorization"]) {
      const data = await axiosInstance.delete(`/tasks/${_id}`);
      return data;
    } else {
      throw Error("No authorization on request", "delete", _id);
    }
  }
}

function setupAuth(token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log("set token to", token);
}

export { Tasks, setupAuth };
