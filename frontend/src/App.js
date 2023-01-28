// import logo from './logo.svg';
// import 'materialize-css';
import React from 'react';
// import { useState, useEffect } from 'react';
// import Form from 'react-bootstrap/Form';
// import { BrowserRouter as Router1} from 'react-router-dom';
// import { useRoutes } from './routes';
import { Layout } from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AddPostPage } from './pages/AddPostPage';
import { EditPostPage } from './pages/EditPostPage';
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
      <Route path='/' element={<MainPage />} />
      <Route path='new' element={<AddPostPage />} />
      <Route path=':id/edit' element={<EditPostPage />} />
      <Route path='posts' element={<PostsPage />}/>
      <Route path=':id' element={<PostPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='login' element={<LoginPage />} />
    </Routes>
  </Layout>
  )
};

//      { <Route path='new' element={<Add/>}/> }

// import './App.css';
 
// function App() {
//   const [todoItems, setTodoItems] = useState([]);
 
//   useEffect(() => {
//     fetch('http://localhost:3001/todo-items')
//       .then((res) => res.json())
//       .then((result) => setTodoItems(result.data));
//   }, []);
 
//   return (
//     <div>
//       {todoItems.map((item) => (
//         <Form.Group key={item.id} className="app__todo-item">
//           <Form.Check type="checkbox" checked={item.done} />
//           <Form.Control type="text" value={item.text} />
//         </Form.Group>
//       ))}
//     </div>
//   );
// }

export default App;
