import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../reducers/AuthReducers";
import { useSelector } from "react-redux";

function SignUp() {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    // If user is logged in, redirect to dashboard
    if (currentUser) {
      navigate('/dashboard');
    }
  }, [currentUser]); 
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [createUser] = useRegisterMutation();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUser(formData);
      if (!res.data) {
        toast.error(res.error.data.error);
      } else {
        toast.success("Admin created Successfully");
        setFormData({
          email: "",
          name: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <div className="login-root md:p-0 p-2">
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
        <div className="loginbackground box-background--white padding-top--64">
          {/* Background elements */}
        </div>
        <div className="box-root flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
          <div className="box-root -pt-48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1 className="font-bold text-3xl">Admin Signup Form</h1>
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner mx-4">
                <span className="padding-bottom--15 pt-4">Create an account.</span>
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="email" className="text-gray-700">Email</label>
                    <input type="email" name="email" id="email"
                      value={formData.email}
                      onChange={handleFormChange} placeholder="Enter email" required />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="name" className="text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name"
                      value={formData.name}
                      onChange={handleFormChange} placeholder="Enter full name" required />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password" className="text-gray-700">Password</label>
                      <div className="reset-pass text-blue-600 hover:text-blue-800">
                        <a href="#">Forgot your password?</a>
                      </div>
                    </div>
                    <input type="password" name="password" id="password"
                      placeholder="***********" value={formData.password}
                      onChange={handleFormChange} required />
                  </div>
                  <div className="field padding-bottom--24">
                    <input type="submit" name="submit" value="Register" />
                  </div>
                  <div className="footer-link pb-2">
                    <span>Already have an account? <a href="/login" className="text-blue-700 font-semibold hover:text-blue-800">Login</a></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
