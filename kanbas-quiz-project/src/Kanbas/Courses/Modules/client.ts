import axios from "axios";

// const COURSES_API = "https://kanbas-node-server-app-bshj.onrender.com/api/courses";
// const MODULES_API = "https://kanbas-node-server-app-bshj.onrender.com/api/modules";
const API_BASE = "http://localhost:4000"; //process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const MODULES_API = `${API_BASE}/api/modules`;

export const fetchAllModules = async () => {
  const response = await axios.get(`${MODULES_API}`);
  return response.data;
}

export const fetchModuleById = async (moduleId: string) => {
  const response = await axios.get(`${MODULES_API}/${moduleId}`);
  return response.data;
}

export const findModulesForCourse = async (courseId?: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;

}
export const createModule = async (courseId?:string, module?:any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};


export const updateModule = async (module?: any) => {
  const response = await axios.
    put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};


export const deleteModule = async (moduleId?:any) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};
