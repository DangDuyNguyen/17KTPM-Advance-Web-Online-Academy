const { default: axios } = require("axios");

const host = "https://learndemy-api.herokuapp.com"

module.exports = {

  register: (bodyData) => {
      console.log(host);
    axios
      .post(host + "/auth/register", {
        username: bodyData.username,
        password: bodyData.password,
        firstname: bodyData.firstname,
        lastname: bodyData.lastname,
        email: bodyData.email,
      })
      .then((response) => {
        console.log(response);
      });
  },
};
