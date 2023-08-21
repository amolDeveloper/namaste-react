# Namaste React 
- React to create element
- ReactDOM to render react elements

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm written in C++
- Caching - Faster Builds
- Image Optimization
- Minification 
- Bundling
- Compress for Prod Build
- Consistent Hashing
- Code Splitting
- Differential Bundling

# JSX
- JSX is not HTML in Javascript
- JSX is HTML like Syntax
- Use camelCase for attributes in JSX
- Babel transpiles JSX to React Element

# React Functional Component
- JS function returning React ELement
- call any JS expression inside {} brackets

# Config Driven UI
- Data will build the UI
- Never use index as unique key while looping

# Two Types of Export and Import
- default export 
- named export

# Hooks
- useState - Whenever state variable updates, react rerenders the component (Super Powerful Variable)
- npm install typescript - if react module not found error appears
- Reconciliation Algorithm (React Fibre)
- Virtual DOM (representation of Actual DOM)
- React is fast becuase it compares diff between two objects(old and new virtual DOM).
- Efficient DOM Manipulation by React makes it even faster.

# Architecture types
- Monolith Architecture (old type - all under one)
- Microservice Architecture (new trend - separate service for each task)
- Microservice Architecture follows single responsibility principe and separation of concerns.

# Use State & Effect Hook
- If no dependency array is present , useEffect will be called on each component render.
- If dependency array is empty ([]), it will be called only once on initail component render. 
- If dependency array has some value, it will be called every time value gets updated.
- Always call useState inside functional component on the top.
- useState (react), useEffect (react), useParams (react-router-dom)


# Class based Component and life cycle hooks
- Render Phase (Contructor and render call back)
- Commit Phase (DOM update and component did mount call back)
- Mounting, Updating and Unmounting phases
- componendDidMount is called after first render
- componentDidUpdate is called after every render
- componentWillUnmount will be called once the component is removed from html.

# Higher Order Component
- HOC is a function that takes an component as an input and returns back a component.
