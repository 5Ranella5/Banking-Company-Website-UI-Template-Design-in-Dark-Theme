import axios from "axios";
import { refs } from "./refs.js";
import { paste } from "./paste.js";

export async function getFaq() {
  try {
    const res = await axios.get(`https://duriki-bd.onrender.com/faqs?page=${refs.page}`);

    if (res.data.length === 0) {
      return [];
    }

    refs.page++;  

    return res.data;
  } catch (error) {
    console.error("Ошибка при загрузке FAQ:", error);
    return [];
  }
}
