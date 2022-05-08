import { routes } from './routes/routes';
import { Route, Routes, Navigate } from 'react-router-dom'

const App = () => {
  return (
     <Routes>
       {
         routes.map(({path, Component}) =>
           <Route key={path} path={path} element={Component} exact/>)
       }
       <Route path={'/*'} element={<Navigate to={'/'} />} />
     </Routes>
  );
};

export default App;
