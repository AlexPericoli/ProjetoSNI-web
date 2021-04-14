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
   ButtonArea,
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
                  <IconArea>
                     <FaShopify size={33} />
                     <div>{cart.length}</div>
                  </IconArea>
               )}
            </a>
         </PageTitleArea>

         <Modal show={exibirModal} onHide={fecharModal} size="xl" centered>
            <ModalBody style={{ backgroundColor: '#ddd' }}>
               <ModalCartArea>
                  <Table
                     size="lg"
                     striped
                     className="table-dark"
                     style={{ fontSize: '16px' }}
                  >
                     <thead>
                        <tr>
                           <th width="14%" style={{ textAlign: 'center' }}>
                              Cód. produto
                           </th>
                           <th width="46%">Título</th>
                           <th
                              width="15%"
                              style={{
                                 textAlign: 'right',
                              }}
                           >
                              Valor (R$)
                           </th>
                           <th
                              width="15%"
                              style={{
                                 textAlign: 'right',
                              }}
                           >
                              Qtd
                           </th>
                           <th width="20%" style={{ textAlign: 'right' }}>
                              Subtotal
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {cart.map((item, index) => (
                           <tr key={index}>
                              <td align="center">{item.id}</td>
                              <td>{item.nome}</td>
                              <td align="right">
                                 {parseFloat(item.valor).toFixed(2)}
                              </td>
                              <td align="right">{item.qtd}</td>
                              <td align="right">
                                 {parseFloat(item.subtotal).toFixed(2)}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </Table>
               </ModalCartArea>
            </ModalBody>
            <Modal.Footer>
               <ButtonArea>
                  <Button
                     variant="primary"
                     onClick={fecharModal}
                     style={{ marginRight: '20px' }}
                  >
                     Confirmar pedido
                  </Button>
                  <Button
                     variant="secondary"
                     onClick={fecharModal}
                     style={{ width: '160px' }}
                  >
                     Fechar
                  </Button>
               </ButtonArea>
            </Modal.Footer>
         </Modal>
      </>
   );
}
