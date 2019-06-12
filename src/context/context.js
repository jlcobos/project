import React, {Component, createContext} from "react";
import testData from "./testData";

export const Context = createContext();
// export const ContextConsumer = Context.Consumer;

export class ContextProvider extends Component {

    state = {
        data: testData,
    }

    render(){
        return(
            <Context.Provider value={{data: this.state.data}}>
                {this.props.children}
            </Context.Provider>
            
        );
    }
}
