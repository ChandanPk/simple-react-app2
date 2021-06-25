import { useHistory } from "react-router";

const Login = () => {
const redirect = useHistory();

const handleRedirect = ()=> {
    redirect.push("/home");
}

    return (
        <> 
            <h1 className="title">Welcome to the JUNGLE!</h1>
          <div id="parent">
              <div className="form">
              <form onSubmit={handleRedirect}>              
                <label>
                    email id: 
                    <input type="text"  name="id"  required />
                </label>

                <label>
                    password: 
                    <input type="password" name="pwd" required />
                </label>

                <button className="btn" type="submit">Authenticate</button>
              </form>
              </div>
          </div>
        </>
     );
}
 
export default Login;