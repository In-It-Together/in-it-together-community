import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./InIt_components/Navbar";
import Welcome from "./InIt_components/Welcome";
import "./index.css";

// Import your user_page component here
<<<<<<< HEAD
import UserTemplate from "./user_pages/juan_perez_EXAMPLE/UserTemplate";
import ShawnComponent from "./user_pages/shawn_huang_fernandes/components/ShawnComponent";
=======
import UserTemplate from './user_pages/juan_perez_EXAMPLE/UserTemplate';
import JoePage from './user_pages/javila35/JoePage';
import ShawnComponent from "./user_pages/shawn_huang_fernandes/components/ShawnHPage";
>>>>>>> a3c66dee7773a40286db3661d1ed5dbae06ba535

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>

          {/* Add your route and user_page component here */}
          {/* 
            <Route path='***YOUR NAME HERE***'>
              < ***YOUR COMPONENT HERE *** />
            </Route>
          */}

          <Route path="/Juan_P">
            <UserTemplate />
          </Route>
          
          <Route path="/javila35">
            <JoePage />
          </Route>


          <Route path="/Shawn_H">
            <ShawnComponent />
          </Route>
<<<<<<< HEAD

=======
          
>>>>>>> a3c66dee7773a40286db3661d1ed5dbae06ba535
        </Switch>
      </Router>
    </div>
  );
}

export default App;
