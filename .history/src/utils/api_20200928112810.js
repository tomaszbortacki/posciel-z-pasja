const API = "https://posciel-cms.herokuapp.com";
const GETTERS = {
  categories: `${API}/categories`,
  products: `${API}/products`,
  pages: `${API}/pages`,
  socials: `${API}/socials`,
  contact: `${API}/contact`,
};
const BASE = "" || process.env.PUBLIC_URL;

export { API, GETTERS, BASE };
