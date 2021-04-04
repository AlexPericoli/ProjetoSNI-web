import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PageTitle from '../../components/PageTitle';

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { array as dataProdutos } from '../../services/dataListaProdutos';

import { PageContent, AreaDescricao } from './styles';

export function PedidosProdutos() {
   const dispatch = useDispatch();

   const [exibirModal, setExibirModal] = useState(false);
   const [preletor] = useState({});

   dispatch({
      type: '@usuarios/SET_TOKEN',
      payload: {
         nome: 'Sérgio dos Santos Paulo',
         nome_funcao: 'Preletor',
         nome_perfil: 'Administrador',
         nome_local: 'Regional Aricanduva',
      },
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
            <Table
               bordered
               style={{
                  border: '2px solid #555',
               }}
            >
               <thead className="table-dark">
                  <tr style={{ fontSize: '17px', textAlign: 'center' }}>
                     <th width="5%">Estoque</th>
                     <th width="45%">Descrição</th>
                     <th width="15%">Categoria</th>
                     <th width="15%">Preço (R$)</th>
                     <th width="10%">Qtd.</th>
                     <th width="10%">Total (R$)</th>
                  </tr>
               </thead>
               <tbody style={{ fontSize: '21px', fontWeight: 400 }}>
                  {dataProdutos.map((item) => (
                     <tr key={item.id} style={{ border: '2px solid #aaa' }}>
                        <td
                           style={{
                              textAlign: 'center',
                              backgroundColor: '#dddddd',
                           }}
                        >
                           {item.qtd_estoque}
                        </td>
                        <td
                           style={{
                              textAlign: 'left',
                              backgroundColor: '#d0d0d0',
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
                        <td
                           style={{
                              backgroundColor: '#dddddd',
                           }}
                        >
                           {item.categoria}
                        </td>
                        <td
                           style={{
                              textAlign: 'right',
                              backgroundColor: '#d0d0d0',
                           }}
                        >
                           {item.preco.toFixed(2)}
                        </td>
                        <td
                           style={{
                              textAlign: 'right',
                              backgroundColor: '#dddddd',
                           }}
                        >
                           {item.qtd_venda}
                        </td>
                        <td
                           style={{
                              textAlign: 'right',
                              backgroundColor: '#d0d0d0',
                           }}
                        >
                           {(item.preco * item.qtd_venda).toFixed(2)}
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
