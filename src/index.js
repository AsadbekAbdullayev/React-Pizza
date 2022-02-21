import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root/index';
import {BrowserRouter } from 'react-router-dom'
import {KorzinaProvider} from './Context/Korzina'
import {AllpriseProvider} from './Context/allprise'
import {NavbarProvider} from './Context/navbar'
import {SelectProvider} from './Context/select'
import 'antd/dist/antd.css'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <KorzinaProvider>
          <AllpriseProvider>
                <NavbarProvider>
                    <SelectProvider>
                           <Root />
                    </SelectProvider>
                </NavbarProvider>
          </AllpriseProvider>
      </KorzinaProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


