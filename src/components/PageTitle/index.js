import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import P from 'prop-types';

import {
   PageTitleArea,
   Title,
   Subtitle,
   IconArea,
   ModalBody,
   ModalCartArea,
} from './styles';

import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { FaShopify } from 'react-icons/fa';

PageTitle.propTypes = {
   title: P.string,
   subtitle: P.string,
   color: P.string,
   icon: P.element,
   cartIcon: P.bool,
};

export default function PageTitle({ title, subtitle, color, icon, cartIcon }) {
   const cart = useSelector((state) => state.cart.itemsCart);
   const [exibirModal, setExibirModal] = useState(false);
   const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
      setCartItems([...cartItems]);
   }, [cart]);

   function abrirCart() {
      setExibirModal(true);
   }

   function fecharModal() {
      setExibirModal(false);
   }

   return (
      <>
         <PageTitleArea>
            {icon}
            <Title color={color}>{title}</Title>
            <Subtitle color={color}>
               {subtitle ? ' / ' : ''} {subtitle}
            </Subtitle>
            <a onClick={() => abrirCart()}>
               {cartIcon && (
                  <>
                     <IconArea>
                        <FaShopify size={33} />
                        <div>1</div>
                     </IconArea>
                  </>
               )}
            </a>
         </PageTitleArea>

         <Modal show={exibirModal} onHide={fecharModal} size="lg" centered>
            <ModalBody>
               <ModalCartArea>
                  <Table size="sm" className="table-dark">
                     <thead>
                        <tr>
                           <th align="center" width="19%">
                              Cód. produto
                           </th>
                           <th width="45%">Título</th>
                           <th width="12%">Valor (R$)</th>
                           <th width="4%"></th>
                           <th width="6%">Qtd</th>
                           <th width="6%"></th>
                           <th width="8%">Subtotal</th>
                        </tr>
                     </thead>
                     <tbody>
                        {cart.map((item, index) => (
                           <tr key={index}>
                              <td align="center">{item.id}</td>
                              <td>{item.nome}</td>
                              <td align="right">{item.valor}</td>
                              <td></td>
                              <td align="right">{item.qtd}</td>
                              <td></td>
                              <td align="right">{item.subtotal}</td>
                           </tr>
                        ))}
                     </tbody>
                  </Table>
               </ModalCartArea>
            </ModalBody>
            <Modal.Footer>
               <Button variant="secondary" onClick={fecharModal}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
