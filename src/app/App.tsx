import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { GlobalContextProvider } from './hooks/useGlobalContext';
import Home from './pages/Home';
import Result from './pages/Result/Result';
import Test from './pages/Test';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={'/'} element={<Home />} />
            <Route path={'/test'} element={<Test />} />
            <Route path={'/result'} element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
