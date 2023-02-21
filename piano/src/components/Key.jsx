import React,{Component} from "react";
import "./Piano.css"

export default class Key extends Component{
render(){
    return(
        <div className="key">
            <div className="key-text">
                {this.props.note.toUpperCase()}
            </div>
        </div>
    );
}
}

