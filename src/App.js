import { Suspense, lazy } from "react";

const Car = lazy(()=> import('./Components/Car'));
const State = lazy(()=> import('./Components/State'));
const Props = lazy(()=> import('./Components/Props'));
const Lifecycle = lazy(()=> import('./Components/lifecycle'));

// import Car from './Components/Car'
// import State from './Components/State'
// import Props from './Components/Props'
// import Lifecycle from './Components/lifecycle';

function App() {
  return (
    <div className="App">
      <h1>Lazy Loading</h1>
      <hr></hr>
      
      <Suspense fallback={<div>Please wait...Car is loading</div>}>
      <Car /> {/*Class based Component */}
      </Suspense><hr></hr>
      
      {/* Use of state in Class based Component  */}
      <Suspense fallback={<div>Please wait...State is loading</div>}>
       <State /> 
      </Suspense><hr></hr>

      {/* Use of props in Class based Component  */}
      <Suspense fallback={<div>Please wait...Props is loading</div>}>
       <Props /> 
       </Suspense><hr></hr>

       {/* Use of lifrcycle in Class based Component */}
      <Suspense fallback={<div>Please wait...Props is loading</div>}>
      <Lifecycle />
      </Suspense><hr></hr>
    </div>
  );
}

export default App;




