import api from "../Http/httpService";

export default (url) => api.get(url).then((res) => res.data);
