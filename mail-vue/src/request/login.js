import http from '@/axios/index.js';

export function login(email, password) {
    return http.post('/login', {email: email, password: password})
}

export function logout() {
    return http.delete('/logout')
}

export function register(form) {
    return http.post('/register', form)
}