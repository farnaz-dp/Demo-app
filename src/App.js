
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"
import {MainApp} from './MainApp'
;import {store} from './Store'

function App() {
  return (
     <Provider store={store}>
         <BrowserRouter>
             <MainApp/>
         </BrowserRouter>
     </Provider>


  );
}

export default App;
