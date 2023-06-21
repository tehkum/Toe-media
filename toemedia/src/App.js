import "./App.css";
import AuthenticateRoutes from "./Routes/AuthenticateRoutes";
import RoutePages from "./Routes/Routes";
import NavigationPanel from "./components/LeftPanel/Navigation";
import PanelTop from "./components/PhonePanel/PanelTop";
import PhonePanel from "./components/PhonePanel/PhonePanel";
import UserSpecPage from "./components/RightPanel/UserSpec";
import { useAuth } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <div className="App">
          <div className="visible-large">
            <NavigationPanel />
          </div>
          <div className="visible-small">
            <PanelTop />
            <PhonePanel />
          </div>
          <RoutePages />
          <UserSpecPage />
        </div>
      ) : (
        <AuthenticateRoutes />
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
