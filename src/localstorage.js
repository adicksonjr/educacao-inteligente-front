export const SCHOOL_REGISTER_KEY = "@schoolregister-info";
export const getSchoolRegister = () => localStorage.getItem(SCHOOL_REGISTER_KEY);
export const setSchoolRegister = modelinfo => {
  localStorage.setItem(SCHOOL_REGISTER_KEY, modelinfo);
};
export const removeUrlSchoolRegister = () => {
  localStorage.removeItem(SCHOOL_REGISTER_KEY);
};
