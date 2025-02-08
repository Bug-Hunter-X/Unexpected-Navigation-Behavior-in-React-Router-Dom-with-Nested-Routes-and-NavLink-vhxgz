```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  console.log('Current Location:', location);
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/about">Go to About</NavLink>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <NavLink to="/">Go to Home</NavLink>
    </div>
  );
}
```