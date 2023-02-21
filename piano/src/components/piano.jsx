import React from "react";
import { NOTES } from "../global/constants";
import Key from "./Key";

class Piano extends React.Component{
    render(){
        const keys = _.map(NOTES,(note,index) => {
            return (
            <Key key = {index} note = {note}/>    
            );
        });
        return (
            <div className="piano">
                {keys}
            </div>
        );
    }
    
}

