import axios from "axios";
import { useEffect } from "react";

const TestAPI = () => {
  useEffect(() => {
    axios.post("http://localhost:5001/api/auth/signup", {
      email: "test@gmail.com",
      password: "test123"
    })
      .then(res => console.log("Success:", res))
      .catch(err => console.log("Error:", err.response?.data || err));
  }, []);

  return <h1>Testing API...</h1>;
};

export default TestAPI;
