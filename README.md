## Modern React with Redux (2020 Update) - Context Project
This project was built as part of the above Udemy course taught by Stephen Grider. I left in some commented out code representing different stages of refactoring throughout the project, as well as some notes.

The course had this project built with class based componenents, but I chose to use functional components, so had to use some different techniques for implementing the various lifecycle methods described in the course.

## Concepts used:

- Context
    - React.createContext()
    - Context.Provider
    - Context.Consumer
    - this.context / useContext
    - using context as a "replacement" for Redux

*NOTE: The course does NOT recommend using context in place of Redux. This was more of an academic exercise to show how you could potentially do it in a smaller app without needing a separate library. It would be challenging with multiple state values and Redux is much more documented and complete.