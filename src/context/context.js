import React, {Component, createContext} from "react";
import data from "./Data";

export const Context = createContext();
// export const ContextConsumer = Context.Consumer;

export class ContextProvider extends Component {

    state = {
        data,
    }

    render(){
        return(
            <Context.Provider value={{data: this.state.data}}>
                {this.props.children}
            </Context.Provider>
            
        );
    }
}
