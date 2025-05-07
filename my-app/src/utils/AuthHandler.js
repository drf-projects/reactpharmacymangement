import axios from "axios";
import Config from "./config";
import { reactLocalStorage } from "reactjs-localstorage";

class AuthHandler{
    static login(username,password,callback){
     axios.
     post(Config.loginUrl,{username:username,password:password})
     .then(function(response){
        if(response.status==200){
             reactLocalStorage.set("token",response.data.access)
             reactLocalStorage.set("token",response.data.refresh)
             callback({error:false,message:'Login Successfull...'})
        }
     })
     .catch(function(error){
        callback({error:true,'message':'Error During Login Invalid Login Detail...'})
     });
    }
}

export default AuthHandler;