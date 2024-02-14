// bringing in the required import from 'react-router-dom'
import { React, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";

// this App.jsx page defines the app at the highest level [i.e. that which is most zoomed out/components, NavBar/Header/Footer/Outlet]
// functional component:
const App = () => {
    // The Outlet component will conditionally swap between the different pages according to the URL
      const [loggedIn, setLoggedIn] = useState(false);
    return (
      <>
        <Nav className="App.jsx"/>
        <List />
        <Header className="Header" />
        <div className="Container">
        {/* // We return the Welcome component and pass loggedIn and setLoggedIn as props. */}
        <Welcome loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
          <Outlet className="Outlet" />
        </div>
        <Footer class="Footer"/>
      </>
    );
}

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

export default App;
// re-export everything
// export * from '@testing-library/react-native';