import React from 'react';
import P from 'prop-types';

import styled from 'styled-components';

const PageTitleArea = styled.div`
   width: 100%;
   margin: 0;
   padding: 0;
   background-color: #37d;
`;

const Title = styled.h1`
   color: ${(props) => props.color};
   font-size: 30px;
   font-weight: 700;
   font-family: 'Lato';
   letter-spacing: 0.2px;

   padding-left: 14px;
   margin-top: 6px;

   h3 {
      font-size: 26px;
      font-weight: 300;
   }
`;

PageTitle.propTypes = {
   title: P.string,
   subtitle: P.string,
   color: P.string,
};

export default function PageTitle({ title, subtitle, color }) {
   return (
      <PageTitleArea>
         <Title color={color}>
            {title}
            <h3>{subtitle}</h3>
         </Title>
      </PageTitleArea>
   );
}
