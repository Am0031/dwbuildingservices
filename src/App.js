import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Router>
        <About />
        <Projects />
      </Router>
      <Footer />
    </ApolloProvider>
  );
};
