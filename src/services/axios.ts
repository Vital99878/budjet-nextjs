import axios from "axios";

export const api= axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json', // Укажите заголовок, если необходимо
        'Authorization': 'Bearer YOUR_TOKEN' // Если требуется авторизация
    }
})
