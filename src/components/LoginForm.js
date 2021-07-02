import {useState} from 'react';
import axios from 'axios';


const LoginForm = (event) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]  = useState('');

    const HandleSubmit = async (e) => {
    e.preventDefault();
    
    
    // if that works out ->we are logged in 
    
   
    const authObject = { 'Project-ID':"77ae9519-2465-4b19-a86b-48cc624bf656", 'User-Name':username,'User-Secret': password};

    try {
        // username/ password = >chategine->gives messages
      await  axios.get('https://api.chatengine.io/chats', { headers:authObject});
      
      
      localStorage.setItem('username',username);
      localStorage.setItem('password',password);
      window.location.reload();//we are reloading s that when we ome second time the page acts differently and doesnt ask for sign in credentials




    } catch (error) {
         //error->try with new username
         setError('Sorry, But the redentials you have added dont match, Please try again:)');

    }


    }

return (

    <div className="wrapper">
        <div className="form">
        <h1 className="title">Demo</h1>
        <form onSubmit ={HandleSubmit}>
            <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
            <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
        <div align="center">
            <button type="submit" className="button">
                <span>Start the Demo</span>
            </button>
        </div>
        <h2 className="error">
        {error}
        </h2>
        </form>

        </div>
    </div>


);
}
export default LoginForm;