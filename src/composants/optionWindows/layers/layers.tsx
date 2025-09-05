import { Picto } from "../../../models/picto";
import Options from "../Options/Options";

function Layers({ isCollapsed, activeLayers }: { isCollapsed: boolean, activeLayers:()=>void }) {
    //state
    const layers = new Picto("couches", "gérer les couches", "public/icons8-calques-64.png");

    //comportement


  return <div onClick={activeLayers}>
            <Options options={layers} addhandleactive={!isCollapsed}/>
        </div>;
}

export default Layers;
