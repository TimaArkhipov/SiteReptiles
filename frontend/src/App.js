// import logo from './logo.svg';
import 'materialize-css';
import React from 'react';
// import { BrowserRouter as Router1} from 'react-router-dom';
import { useRoutes } from './routes';
import { Layout } from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom';
// import { MainPage } from './pages/MainPage';
import { PostPage } from './pages/PostPage';
import { PostsPage } from './pages/PostsPage';
import { RegisterPage } from './pages/RegisterPage';  
import { LoginPage } from './pages/LoginPage';

function App() {
  // const routes = useRoutes(false)
  // return (
  //   // <Router1>
  //     <div className="App">
  //       {routes}
  //     </div>
  //   // </Router1>
  // );
  return (
  <Layout>
    <Routes>
      {/* <Route path='/' element={<MainPage />} /> */}
      <Route path='posts' element={<PostsPage />}/>
      <Route path=':id' element={<PostPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='login' element={<LoginPage />} />
    </Routes>
     </Layout>
  )
};

//      { <Route path='new' element={<Add/>}/> }

export default App;
