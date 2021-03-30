import { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { array as dataProdutos } from '../../services/dataProdutos';

import { PageContent, AreaDescricao } from './styles';

export function VendasProdutos() {
   const [exibirModal, setExibirModal] = useState(false);
   const [preletor] = useState({});

   function fecharModal() {
      setExibirModal(false);
   }

   return (
      <>
         <PageTitle
            title="Vendas de Produtos / Associação local Vila Carrão"
            color="#000"
         />
         <PageContent>
            <AreaDescricao>
               <p>Clique no nome do produto para exibir mais detalhes</p>
            </AreaDescricao>
            <Table
               striped
               bordered
               style={{
                  fontFamily: 'Lato',
                  fontWeight: 500,
                  border: '2px solid #aaa',
               }}
            >
               <thead className="table-dark">
                  <tr style={{ fontSize: '15px' }}>
                     <th style={{ width: 50, textAlign: 'center' }}>Estoque</th>
                     <th width="20"></th>
                     <th width="440">Descrição</th>
                     <th>Categoria</th>
                     <th width="100">Preço (R$)</th>
                     <th style={{ width: 140, textAlign: 'center' }}>Qtd.</th>
                     <th width="110">Total (R$)</th>
                  </tr>
               </thead>
               <tbody>
                  {dataProdutos.map((item) => (
                     <tr key={item.id} style={{ fontSize: '15px' }}>
                        <td style={{ textAlign: 'right' }}>
                           {item.qtd_estoque}
                        </td>
                        <td></td>
                        <td style={{ textAlign: 'left' }}>
                           <a
                              onClick={() => setExibirModal(true)}
                              style={{ cursor: 'pointer' }}
                           >
                              {item.titulo}{' '}
                              {item.volume ? `vol. ${item.volume}` : ''}
                           </a>
                        </td>
                        <td>{item.categoria}</td>
                        <td align="right">{item.preco.toFixed(2)}</td>
                        <td style={{ textAlign: 'center' }}>
                           {item.qtd_venda}
                        </td>
                        <td style={{ textAlign: 'right' }}>
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
