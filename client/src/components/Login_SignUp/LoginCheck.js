import axios from "axios";


const LoginCheck = async ({...formData},serverURL)=>{
    try {
        const res = await axios.post(serverURL, formData); // fetching the post url and form data
        // console.log(res.data); 
        localStorage.setItem("userName", res.data.email);
        localStorage.setItem("token", res.data.Token);
        localStorage.setItem("personLogin", "SuperAdmin");
        // console.log(res);
        return res;    // returning response 
      } catch (error) {
        // console.error(error);
        return error; 
      }
}
   
  


export default LoginCheck