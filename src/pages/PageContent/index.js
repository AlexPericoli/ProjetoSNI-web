import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../../routes';

import {
   AppContainer,
   HeaderArea,
   PageBody,
   SidebarArea,
   Content,
} from './styles';

import { ThemeProvider } from 'styled-components';
import { Cores } from '../../styles/cores';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export function PageContent() {
   return (
      <>
         <ThemeProvider theme={Cores}>
            <BrowserRouter>
               <AppContainer>
                  <HeaderArea>
                     <Header />
                  </HeaderArea>
                  <PageBody>
                     <SidebarArea>
                        <Sidebar />
                     </SidebarArea>
                     <Content>
                        <Router />
                     </Content>
                  </PageBody>
               </AppContainer>
            </BrowserRouter>
         </ThemeProvider>
      </>
   );
}
