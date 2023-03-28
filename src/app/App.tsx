import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { GlobalContextProvider } from './hooks/useGlobalContext';
import Home from './pages/Home';
import Result from './pages/Result/Result';
import Test from './pages/Test';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/test'} element={<Test />} />
          <Route path={'/result'} element={<Result />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
