import {EMAIL, TOKEN, USER_ID} from "./constants";

export function logout(history) {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(EMAIL);
    localStorage.removeItem(USER_ID);
    history.push('/admin');
}

export function saveUser(user) {
    localStorage.setItem(TOKEN, user.token);
    localStorage.setItem(EMAIL, user.email);
    localStorage.setItem(USER_ID, user._id);
}