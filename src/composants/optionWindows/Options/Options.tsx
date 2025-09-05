import { Picto } from "../../../models/picto";
import "./Options.css";

function Options({options, addhandleactive}: {options: Picto, addhandleactive:boolean}) {
  // states

  //comportements
 

  //rendu
  return (
    <div id={`option-${options.title}`} className={`option ${!addhandleactive ? "options-deactive" : ""}`}>
      <img src={options.imageUrl} alt={options.description} />
      <span style={{display: addhandleactive ? "block" : "none"}}>{options.description}</span>
    </div>
  );
}
export default Options;
