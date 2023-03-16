import React, { createContext, Component } from 'react'

export const createContext = createContext();

class ThemeContextProvider extends Component{
    state = {
        ss
    }
    render() {
        return (
        <ThemeContext.Provider value{{...this.state}}>
        {this.props.children}
        </ThemeContext.Provider>
    
        );
    }

}

export default ThemeContextProvider;