import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PageTitle from '../../components/PageTitle';

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { array as dataProdutos } from '../../services/dataListaProdutos';

import { PageContent, AreaDescricao } from './styles';

export function EstoqueProdutos() {
   const dispatch = useDispatch();

   const [exibirModal, setExibirModal] = useState(false);
   const [preletor] = useState({});

   useEffect(() => {
      dispatch({
         type: '@usuarios/SET_TOKEN',
         payload: {
            nome: 'Sérgio dos Santos Paulo',
            nome_funcao: 'Preletor',
            nome_perfil: 'Administrador',
            nome_local: 'Regional Aricanduva',
            cor_perfil: '#e21',
         },
      });
   });

   function fecharModal() {
      setExibirModal(false);
   }

   return (
      <>
         <PageTitle
            title="Lista de produtos e quantidades em estoque"
            subtitle="Regional SP-Aricanduva"
            color="#fff"
            cartIcon={true}
         />
         <PageContent>
            <AreaDescricao>
               <p
                  style={{
                     color: '#fff',
                     backgroundColor: '#000',
                     padding: '5px',
                  }}
               >
                  Campo de busca e filtros
               </p>
            </AreaDescricao>
            <Table striped>
               <thead
                  style={{
                     borderTop: '2px solid #bbb',
                     borderBottom: '3px solid #bbb',
                  }}
               >
                  <tr style={{ fontSize: '16px', fontFamily: 'Lato' }}>
                     <th width="30%">Descrição</th>
                     <th width="10%">Categoria</th>
                     <th width="10%" style={{ textAlign: 'right' }}>
                        Preço (R$)
                     </th>
                     <th width="10%" style={{ textAlign: 'center' }}>
                        <div
                           style={{
                              textAlign: 'center',
                              backgroundColor: '#f55',
                              padding: '2px 10px',
                              borderRadius: '10px',
                           }}
                        >
                           RETIRADO
                        </div>
                     </th>
                     <th width="10%" style={{ textAlign: 'center' }}>
                        <div
                           style={{
                              textAlign: 'center',
                              backgroundColor: '#ff8',
                              padding: '2px 10px',
                              borderRadius: '10px',
                           }}
                        >
                           ESTOQUE AL
                        </div>
                     </th>
                     <th width="10%" style={{ textAlign: 'center' }}>
                        <div
                           style={{
                              textAlign: 'center',
                              backgroundColor: '#9fb',
                              padding: '2px 10px',
                              borderRadius: '10px',
                           }}
                        >
                           VENDIDO
                        </div>
                     </th>
                     <th width="10%" style={{ textAlign: 'center' }}>
                        <div
                           style={{
                              textAlign: 'center',
                              backgroundColor: '#9cf',
                              padding: '2px 10px',
                              borderRadius: '10px',
                           }}
                        >
                           FINALIZADO
                        </div>
                     </th>
                     <th width="10%" style={{ textAlign: 'right' }}>
                        Qtd. total
                     </th>
                  </tr>
               </thead>
               <tbody
                  style={{
                     fontSize: '16px',
                     fontWeight: 400,
                     fontFamily: 'Lato',
                  }}
               >
                  {dataProdutos.map((item) => (
                     <tr key={item.id} style={{ border: '2px solid #aaa' }}>
                        <td
                           style={{
                              textAlign: 'left',
                           }}
                        >
                           <a
                              onClick={() => setExibirModal(true)}
                              style={{ cursor: 'pointer' }}
                           >
                              {item.titulo}{' '}
                              {item.volume ? `vol. ${item.volume}` : ''}
                           </a>
                        </td>
                        <td style={{}}>{item.categoria}</td>
                        <td
                           style={{
                              textAlign: 'right',
                           }}
                        >
                           {item.preco.toFixed(2)}
                        </td>
                        <td
                           style={{
                              textAlign: 'center',
                              fontWeight: 700,
                           }}
                        >
                           0
                        </td>
                        <td
                           style={{
                              textAlign: 'center',
                              fontWeight: 700,
                           }}
                        >
                           0
                        </td>
                        <td
                           style={{
                              textAlign: 'center',
                              fontWeight: 700,
                           }}
                        >
                           0
                        </td>
                        <td
                           style={{
                              textAlign: 'center',
                              fontWeight: 700,
                           }}
                        >
                           0
                        </td>
                        <td
                           style={{
                              textAlign: 'right',
                           }}
                        >
                           {item.qtd_estoque}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </Table>

            <Modal show={exibirModal} onHide={fecharModal} size="lg" centered>
               <Modal.Header closeButton>
                  <Modal.Title>
                     <div style={{ display: 'flex' }}>
                        <div>
                           <img
                              width="40%"
                              src="https://i1.sndcdn.com/artworks-000060960394-e2pmxm-t500x500.jpg"
                              alt=""
                           />
                        </div>
                        <div>2</div>
                     </div>
                     Preletor(a)&nbsp;{preletor.name}{' '}
                     <p className="h6">{preletor.location}</p>
                  </Modal.Title>
               </Modal.Header>
               <Modal.Body>Woohoo, reading this text in a modal!</Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={fecharModal}>
                     Close
                  </Button>
                  <Button variant="primary" onClick={fecharModal}>
                     Save Changes
                  </Button>
               </Modal.Footer>
            </Modal>
         </PageContent>
      </>
   );
}
