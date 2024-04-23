import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({children}) => {
    const [searchKeywords, setSearchKeywords] = useState(null);

    return (
        <Context.Provider value={{searchKeywords, setSearchKeywords}}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;