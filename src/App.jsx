import { Routes, Route, useNavigate,  } from "react-router-dom";
import {
  Landing,
  Login,
  NotFound,
  SignUp,

} from "./pages";
import { logOut } from "./reducers/AuthReducers";
import RequireAuth from "./actions/requireAuth";

// import ForgetPassword from "./pages/Auth/ForgetPassword";
import { useDispatch } from "react-redux";
import Layout from "./layouts/Layout";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/");
    window.location.reload(); // Refresh the page
  };

  return (

      <Routes>
        
        {/* auth section */}
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>

        
          <Route
              path=""
              element={<Layout handleLogout={handleLogout} />}
            >
                <Route index element={<Landing />}  />
           {/* other routes section */}

          </Route>

          {/* require auth */}
          <Route element={<RequireAuth />}>
          
        </Route>

        {/* not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
   
  );
}