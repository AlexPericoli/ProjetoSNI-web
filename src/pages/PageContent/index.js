import React from 'react';
import Routes from '../../routes2';

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
      <ThemeProvider theme={Cores}>
         <AppContainer>
            <HeaderArea>
               <Header />
            </HeaderArea>
            <PageBody>
               <SidebarArea>
                  <Sidebar />
               </SidebarArea>
               <Content>
                  <Routes />
               </Content>
            </PageBody>
         </AppContainer>
      </ThemeProvider>
   );
}
