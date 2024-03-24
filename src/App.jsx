import { Routes, Route, useNavigate,  } from "react-router-dom";
import {
  Dashboard,
  Login,
  NotFound,

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
    dispatch(logOut());
    navigate("/");
    window.location.reload(); // Refresh the page
  };

  return (

      <Routes>
        
        {/* auth section */}
        <Route path="/login" element={<Login />}/>

          <Route index element={<Login />}  />
          <Route element={<RequireAuth />}>
          <Route
              path=""
              element={<Layout handleLogout={handleLogout} />}
            >
           {/* other routes section */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>

        {/* not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
   
  );
}