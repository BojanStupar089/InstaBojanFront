import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import MyRouter from "./router/MyRouter";
import "./helpers/interceptors/TokenInterceptor";




import ProtectedRoute from "./router/ProtectedRoute";
import Navbar from "./components/MainPageModule/Navbar/Navbar";

function App() {
  return (
    <>
      <ProtectedRoute component={<Navbar />} navigate={<></>} />
      <MyRouter />
    </>
  );
}

export default App;
