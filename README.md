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

# Redux
- React and Redux are two separate libararies.
- Install @reduxjs/toolkit and react-redux.
- Build our store and connect to our app.
- create a Cart slice to add items to cart.
- click event dispatches an action which calls a function which inturn modifies the state slice.
- function is known as Reducer which modifies the state of redux store.
- Use selector to read modified data from store and modify UI (subscribing to the store);

# Types of testing (developer)
- Unit Testing
- Integration Testing
- End to End (e2e) Testing

# Testing set up
- Install react testing librart (npm install --save-dev @testing-library/react)
- Install jest (npm install --save-dev jest)
- Install babel dependency (npm install --save-dev babel-jest @babel/core @babel/preset-env)
- Configure babel - create babel.config.js 
- Configure Parcel -create .parcelrc file to disable default babel transpilation so that jest can pick it up from babel.config.js
- Jest Configuration (npx jest init).
- Install jsdom library (npm install --save-dev jest-environment-jsdom)
- Install @babel/preset-react (npm install --save-dev @babel/preset-react)
- Configure @babel/preset-react in babel.config.js
- Install jest dom (npm install --save-dev @testing-library/jest-dom)
- Add jest --watch to package.json to run tests continuously
