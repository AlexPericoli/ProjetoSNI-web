import React from 'react';
import P from 'prop-types';

import styled from 'styled-components';

const PageTitleArea = styled.div`
   width: 100%;
   margin: 0;
   padding: 0;
`;

const Title = styled.h1`
   color: ${(props) => props.color};
   font-size: 28px;
   font-weight: 400;
   font-family: 'Lato';
   letter-spacing: 0.2px;

   padding-left: 14px;
   margin-top: 6px;
`;

PageTitle.propTypes = {
   title: P.string,
   color: P.string,
};

export default function PageTitle({ title, color }) {
   return (
      <PageTitleArea>
         <Title color={color}>{title}</Title>
      </PageTitleArea>
   );
}
