const url = process.env.REACT_APP_URL;

const makeRequest = async (url, method = "GET", body = null) => {

  const token=sessionStorage.getItem("Token_Bearer");
  console.log(token);
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
    body: JSON.stringify(body),
  };
  if (method === "GET" || method === "DELETE") {
    delete options.body;
  }
  
  try {
    const response = await fetch(url, options);
    console.log(response);
    console.log(options);
    const text = await response.text();
    if (!response.ok) {
      throw new Error("Could not fetch");
    }
    try {
      const json = JSON.parse(text);
      return json;
    } catch (err) {
      return text;
    }
  } catch (err) {
    alert(err.message);
  }
};

const requests = {
  
  getUsers: async () => {
    return makeRequest(url);
  },
  createUser: async (user) => {
    console.log(user);
    // console.log(`${url}conta/registar`, "POST", user);
    return makeRequest(`${url}conta/registar`, "POST", user);
  },
  createProduct: async (product) => {
    
    console.log(product);
    // console.log(`${url}conta/registar`, "POST", user);
    return makeRequest(`${url}produto`, "POST", product);
  },
  listProducts: async () => {
    return makeRequest(`${url}produto`, "GET");
  },
  validateUser: async (user) => {
    console.log(user);
    // console.log(`${url}conta/registar`, "POST", user);
    return makeRequest(`${url}conta/login`, "POST", user);
  },
  updateUser: async (id, user) => {
    return makeRequest(`${url}/${id}`, "PUT", user);
  },
  deleteUser: async (id) => {
    return makeRequest(`${url}/${id}`, "DELETE");
  },
  eliminarProduto: async (id) => {
    return makeRequest(`${url}produto/${id}`, "DELETE");
  },
  atualizarProduto: async (produto) => {
    
    return makeRequest(`${url}produto/${produto.indice}`, "PUT",produto);
   },
};

export default requests;
