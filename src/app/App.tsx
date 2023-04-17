import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Result from './pages/Result/Result';
import Test from './pages/Test';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={'/'} element={<Home />} />
            <Route path={'/test'} element={<Test />} />
            <Route path={'/result'} element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
