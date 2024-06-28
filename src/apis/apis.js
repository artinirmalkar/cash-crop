// ../../apis/apis.js
import { apiService } from "../config/apiConfig";

const api = {
    login: (payload) => console.log('my login', payload),
    register: (payload) => console.log('my register', payload),
    getAllModifierCategory: () => apiService.get('modifierCategory')
};

export default api;
