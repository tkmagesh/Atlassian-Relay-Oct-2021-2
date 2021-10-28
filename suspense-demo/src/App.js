import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import Bugs from './bugs';

function App() {
  return (
     <div>
     {/*  <Suspense fallback={<h1>Loading...</h1>}> */}
        <Bugs/>
      {/* </Suspense> */}
      <h2>Users</h2>
     </div>
  );
}

export default App;
