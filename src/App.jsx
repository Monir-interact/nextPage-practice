import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <h1>
      <Header></Header>
      <Outlet />
      <Footer />
    </h1>
  );
}

export default App;
