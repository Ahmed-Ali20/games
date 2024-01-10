import api from "../api";
/**
 * params path: photos/:id
 */
const fetchGetPhotos = async (path) => {
  return (await api.get(`${path}`)).data;
};

export default fetchGetPhotos;
