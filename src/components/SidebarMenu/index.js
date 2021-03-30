import React from 'react';
import P from 'prop-types';

import { MenuTitle as TitleArea, MenuItem as ItemArea, Title } from './styles';

MenuTitle.propTypes = {
   title: P.string,
   icon: P.string,
};

MenuItem.propTypes = {
   title: P.string,
};

export function MenuTitle({ title, icon }) {
   return (
      <TitleArea>
         {icon}

         <Title>{title.toUpperCase()}</Title>
      </TitleArea>
   );
}

export function MenuItem({ title }) {
   return (
      <ItemArea>
         <div>{title.toUpperCase()}</div>
      </ItemArea>
   );
}
