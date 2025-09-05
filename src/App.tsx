import OptionWindows from "./composants/optionWindows/optionwindows";
import NavBar from "./composants/NavBar/NavBar";
import Mymap from "./composants/mymap/mymap";
import './App.css'

function App(){
  // state
  

  return (<>
  <header>
    <NavBar/>
  </header>

  <main>
    <aside>
      <OptionWindows/>
    </aside>

    <div id="mymap">
      <Mymap/>
    </div>
  </main>
  </>)
}


export default App;