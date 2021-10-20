import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, email, password, handleNameChange, handlePasswordChange, handleEmailChange, isLogin, toggleLogin, error, setUser, setIsLoading, registerNewUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const reDirectUrl = location.state?.from || "/home";


    const handlGoogle = ()=>{
        setIsLoading(true);
        signInUsingGoogle()
        .then(result => {
            setUser(result.user);
            history.push(reDirectUrl)
        })
        .finally(() => setIsLoading(false));
    }
    

    const handleRegistration =(e) =>{
      e.preventDefault()
      registerNewUser(email, password)
      .then(result => {
        const user = result?.user;
        console.log(user);
        // setUserName();
        history.push(reDirectUrl)
      })
    }


    return (
        <div className="mx-5">
            <form onSubmit={handleRegistration}><br />
        <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
        {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      {/* <div>--------------------------------</div> */}
      <br />
            <h4 className="text-primary">Please Login Using Google</h4>
            <button onClick={handlGoogle} className="btn btn-warning">Google Sign In</button><br /><br /><br /><br />
        </div>
    );
};

export default Login;