import axios from "axios";

const api = axios.create({
    baseURL: 'http://apiteste.felixsapp.com/educacao.php?request=api'
});

export const ADVANCED_SEARCH = '/escolas/buscaavancada?nome=';


export default api;