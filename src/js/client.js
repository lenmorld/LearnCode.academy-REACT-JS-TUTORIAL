import React from "react";
import ReactDOM from "react-dom";

// import { Router, Route, IndexRoute, hashHistory } from "react-router";

// v4
import { BrowserRouter, IndexRoute, Route, Link } from 'react-router-dom'

// import Bootstrap from "./vendor/bootstrap-without-jquery-master/bootstrap3";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

// ReactDOM.render(<Layout/>, app);

// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Layout}>
//
//     </Route>
//   </Router>,
// app);

// cant nest routes in react-router-v4

// ReactDOM.render(
//   <BrowserRouter>
//     <Route path="/" component={Layout}>
//       <IndexRoute component={Featured}></IndexRoute>
//         <Route path="archives" component={Archives}></Route>
//         <Route path="settings" component={Settings}></Route>
//     </Route>
//   </BrowserRouter>,
// app);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/archives">Archives</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>

      <Route exact path="/" component={Layout} />
      <Route exact path="/" component={Featured} />
      <Route path="/archives" component={Archives} />
      <Route path="/settings" component={Settings} />
    </div>
  </BrowserRouter>,

app);
