import Options from "../Options/Options";
import {Picto} from "../../../models/picto";

function Collapse({isCollapsed, onToggle}:{isCollapsed: boolean, onToggle: () => void}) {
    // states
  const collapse = new Picto("collapse", "réduire", isCollapsed ? "public/icons8-double-droite-100.png" : "public/icons8-double-gauche-100.png");

  // comportements

    return (
        <div onClick={onToggle}>
          <Options options={collapse} addhandleactive={!isCollapsed}/>
        </div>
    );
}

export default Collapse;
