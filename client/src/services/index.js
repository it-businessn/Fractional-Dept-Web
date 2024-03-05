import { API } from "../api";

export const getResumes = () => API.get("/resumes");
export const addResume = (formData) => API.post(`/resumes`, formData);
export const sendEmail = (formData) => API.post(`/send-email`, formData);
