import "antd/dist/antd.min.css";
import { HashRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./AppRoutes";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
      <Footer />
    </ApolloProvider>
  );
};
