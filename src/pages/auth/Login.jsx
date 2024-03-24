import "../../assets/login.css";
import { useRef, useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials, setCurrentUser } from "../../reducers/AuthReducers";
import { useLoginMutation } from "../../actions/authActions";
import { toast } from "react-toastify";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const Email_REGEX = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
  // const Password_REGEX = /^\d{6,24}$/;

  const isValidEmail = (email) => Email_REGEX.test(email);
  // const isValidPassword = (password) => Password_REGEX.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast.error("Please enter both email and password.");
        return;
      }

      if (!isValidEmail(email)) {
        toast.error("Invalid email format.");
        return;
      }

      const emailData = await login({ email, password }).unwrap();
      console.log(emailData);
      if (emailData.error) {
        toast.error("Internal Server Error");
      } else {
        setEmail("");
        setPassword("");
        dispatch(setCredentials(emailData));
        dispatch(setCurrentUser(emailData.user));
        navigate("/dashboard/vendor");
      }
    } catch (err) {
      console.log(err);
      if (!err?.status) {
        toast.error("No Server Response");
      } else if (err.status === 404) {
        toast.error(err.data?.error || "User Not Found");
      } else if (err.status === 403) {
        toast.error(err.data.error);
      } else if (err.status === 401) {
        toast.error(err.data.error);
      } else {
        toast.error("Login Failed");
      }
      emailRef.current.focus();
    }
  };

  return (
   
    <div className="login-root md:p-0 p-2 ">
    <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
            <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
            <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
            <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
            <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
            <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
            <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
            <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
            <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
            <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
          </div>
        </div>
      </div>
      <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
        <div className="box-root -pt-48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1 className="font-bold text-3xl">Admin Login Form</h1>
        </div>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">Sign in to your account</span>
              <form id="stripe-login" onSubmit={handleSubmit}>
                <div className="field padding-bottom--24 ">
                  <label htmlFor="email" className="text-gray-700">Email</label>
                  <input type="email" name="email"  ref={emailRef} value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required/>
                </div>
                <div className="field padding-bottom--24">
                  <div className="grid--50-50">
                    <label htmlFor="password" className="text-gray-700">Password</label>
                    <div className="reset-pass text-gray-700">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <input type="password" name="password"  ref={passwordRef}
                    placeholder="*****************" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
{/* <div className="flex items-center -mt-4 mb-2">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="link-checkbox" className="ms-4 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keep me logged in.</label>
</div> */}

                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" value="Login" />
                </div>
                {/* <div className="footer-link">
            <span>Don&apos;t have an account? <a href="/signup" className="text-blue-700 font-semibold hover:text-blue-800">Sign up</a></span>
            
          </div> */}
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login