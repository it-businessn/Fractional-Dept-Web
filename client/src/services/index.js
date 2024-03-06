import { API } from "../api";

export const getResumes = () => API.get("/resumes");
export const uploadResume = (formData) => API.post(`/resumes/upload`, formData);
export const sendEmail = (formData) => API.post(`/send-email`, formData);
