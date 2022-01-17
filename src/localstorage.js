export const SCHOOL_REGISTER_KEY = "@schoolregister-info";
export const getSchoolRegister = () => localStorage.getItem(SCHOOL_REGISTER_KEY);
export const setSchoolRegister = modelinfo => {
  localStorage.setItem(SCHOOL_REGISTER_KEY, modelinfo);
};
export const removeUrlSchoolRegister = () => {
  localStorage.removeItem(SCHOOL_REGISTER_KEY);
};
export const TOKEN_KEY = "@token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};