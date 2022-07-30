import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataProvider from './component/context/ContextProvider';
import SideContextProvider from './component/context/SideContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <DataProvider>
            <SideContextProvider>
                <App />
            </SideContextProvider>
        </DataProvider>
    </>
);

