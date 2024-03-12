import React from "react"
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import PostList from "./PostList";

function App() {
  return (
<BrowserRouter>
{/* <Home/> */}
<Routes>
  <Route>
 
  <Route path="/" element={<Home />} />
  <Route path="/signup" component={<Register/>} />
  {/* <Route path="/posts" component={<PostList/>} /> */}
  <Route path="/posts" element={<PostList />} />
  <Route/>
  </Route>
</Routes>

</BrowserRouter>
  );
}

export default App;
