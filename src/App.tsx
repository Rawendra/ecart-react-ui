import Header from "./components/header/Header";
import CustomRoutes from "./routes/CustomRoutes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <CustomRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
