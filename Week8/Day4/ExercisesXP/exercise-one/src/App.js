import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <div>
        <>
        <p>Hello</p>
        <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px',
                    height: '50px'
                
                }}>
                    <div style={{ margin: '10px' }}>
                          <NavLink to="/" >
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                          <NavLink to="/profile" >
                              Profile
                          </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                          <NavLink to="/shop" >
                              Shop
                          </NavLink>
                    </div>
                </div>
                <Routes>
                  <>
                  <ErrorBoundary>
                      <Route exact path="/" element={<Home test='5' />} />
                  </ErrorBoundary>
                  <ErrorBoundary>
                      <Route exact path="/profile" element={<Profile />} />
                  </ErrorBoundary>
                  <ErrorBoundary>
                      <Route exact path="/shop" element={<Shop />} />
                  </ErrorBoundary>
                    </>
                </Routes>
                </BrowserRouter>
        </>
        
      </div>
    </div>
  );
}

export default App;
