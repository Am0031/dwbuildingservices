import { useReducer, useEffect } from "react";
import { dwprojects } from "../data/dwprojects";

export const Projects = () => {
  //initial state
  const initialState = {
    projects: dwprojects,
    selectedProject: undefined,
    projectCount: "",
  };
  //function reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "projects":
        return { ...state };
      case "selected":
        return { ...state, selectedProject: action.selection };
      case "projectCount":
        return { ...state };
      default:
        throw new Error();
    }
  };
  //useReducer state
  const [state, dispatch] = useReducer(reducer, initialState);

  //useEffect for onload repos population
  // useEffect(() => {
  // }, []);

  //function to get the info from the form and do the search
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("submitting form");
  };

  //function to handle input field change
  const handleChange = (event) => {
    dispatch({ type: "username", username: event.target.value });
  };

  //function to handle click on a project to see more details
  const onProjectClick = (event) => {
    const selection = state.projects.filter(
      (item) => item.id === event.target.id
    )[0];
    dispatch({ type: "selected", selection });
  };

  return (
    <div>
      <h1>DW Projects</h1>
      {state.projects && state.projects.length ? (
        state.projects.map((item) => {
          return (
            <div key={item.id} id={item.id}>
              <h2>{item.name}</h2>
              <h2>{item.description}</h2>
              <button
                style={{ height: "20", width: "300" }}
                id={item.id}
                onClick={onProjectClick}
              >
                {" "}
                View details
              </button>
            </div>
          );
        })
      ) : (
        <div> No projects </div>
      )}
      {state.selectedProject && (
        <div key={state.selectedProject.id} id={state.selectedProject.id}>
          <h2>{state.selectedProject.name}</h2>
          <h2>{state.selectedProject.description}</h2>
          <h3>{state.selectedProject.tags}</h3>
        </div>
      )}
    </div>
  );
};
