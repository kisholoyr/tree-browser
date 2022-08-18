import axios from "../API";
export const ApiHelperFunction = async (data) => {
  const { urlPath, method, formData } = data;
  var config = {
    method: `${method}`,
    url: `${urlPath}`,
    data: formData,
  };
  let responseData = "";
  await axios(config)
    .then(function (response) {
      responseData = response;
    })
    .catch(function (error) {
      if (error?.response?.status === 401) {
        clearLocalStorage();
        clearSessionStorage();
        window.location.reload();
      } else {
        console.log(error?.response);
        responseData = error?.response;
      }
    });
  return responseData;
};

export const getStorage = (sKey) => {
  if (localStorage.getItem("remember_me") === "true") {
    return localStorage.getItem(sKey);
  } else {
    return sessionStorage.getItem(sKey);
  }
};
