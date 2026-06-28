import { TeachersResponse } from "@/types/teachers";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_FB_DB_URL;

export const fetchTeachers = async (): Promise<TeachersResponse> => {
  const { data } = await axios.get<TeachersResponse>("/teachers.json");

  return data;
};
