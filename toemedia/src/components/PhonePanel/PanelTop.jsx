import "./PanelTop.css";
import { icon } from "../../img";
import SearchBar from "../SearchBar/SearchBar";

export default function PanelTop(){
    return <div className="panel-top">
        <img src={icon} alt="icon" width="70" height="70"/>
        <SearchBar />
    </div>
}