import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Drivers from './components/Drivers/Drivers';
import Home from './components/Home/Home';
import Cars from './components/Cars/Cars';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
