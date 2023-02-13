import React, { createContext, useState } from 'react';
import AppContent from 'components/AppContent';

export const Context = createContext();

const App = () => {
    const [storage, setStorage] = useState(300);
    const [transfer, setTransfer] = useState(300);

    return (
    <Context.Provider value={{storage, setStorage, transfer, setTransfer}}>
        <AppContent />
    </Context.Provider>
    );
}

export default App;