import "antd/dist/antd.min.css";
import { HashRouter as Router } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./AppRoutes";

import "./App.css";

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
      <Footer />
    </>
  );
};
