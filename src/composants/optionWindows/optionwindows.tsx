import Options from "./Options/Options";
import { Picto } from "../../models/picto";
import "./optionWindows.css";
import Collapse from "./collapse/collapse";
import { useState } from "react";
import Layers from "./layers/layers";

function OptionWindows() {
  // état
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLayersActive, setIslayersActive] = useState(false)

  const about = new Picto("Information", "information", "public/icons8-info-500.png");
  const filter = new Picto("filtrer", "filtrer les données", "public/icons8-filtre-100.png");
  const print = new Picto("imprimer", "imprimer la carte", "public/icons8-imprimer-50.png");

  // comportements

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const activedLayers = ()=>{
    if(!isCollapsed) toggleCollapse();
    setIslayersActive((prev)=>!prev);
  }

  return (
    <div id="optionWindows-container">
      <div className={isCollapsed ? "optionWindows-collapsed" : "optionWindows-expanded"}>
        <div>
          <Layers isCollapsed={isCollapsed} activeLayers={activedLayers}/>
          <Options options={filter} addhandleactive={!isCollapsed} />
          <Options options={print} addhandleactive={!isCollapsed} />
      </div>
      <div>
        <Options options={about} addhandleactive={!isCollapsed} />
        <Collapse isCollapsed={isCollapsed} onToggle={toggleCollapse} />
      </div>
    </div>

    <div className={(isLayersActive)?"manageOptions-active":""}>
      <div className="manageOptions" id="layers" style={{display: isLayersActive ? "block" : "none"}}></div>
      <div className="manageOptions" id="filter" style={{display:"none"}}></div>
      <div className="manageOptions" id="information" style={{display:"none"}}></div>
    </div>
    </div>
  );
}

export default OptionWindows;
