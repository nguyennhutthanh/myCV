import './App.css';
import './Responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header/Index';
import NaBar from './components/Nabar/Index';
import TabPage from './components/TabPage/Index';
import Menu from './components/Content/Index';
import Error from './components/Error/Index';

const Home = lazy(() => import('./components/Home/Index'));
const Student = lazy(() => import('./components/Student/Index'));
const Target = lazy(() => import('./components/Target/Index'));
const Hoppy = lazy(() => import('./components/Hoppy/Index'));

function App() {
  return (
    <>
      <Suspense fallback={
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>}>
        <ToastContainer />
        <Main>
          <Header />
          <NaBar>
            <TabPage />
            <Menu>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="student" element={<Student />} />
                <Route exact path="target" element={<Target />} />
                <Route exact path="hoppy" element={<Hoppy />} />

                <Route exact path="*" element={<Error />} />
              </Routes>
            </Menu>
          </NaBar>
        </Main>
      </Suspense>
    </>
  );
}

export default App;
