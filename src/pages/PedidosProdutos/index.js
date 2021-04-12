import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import PageTitle from '../../components/PageTitle';

import Table from 'react-bootstrap/Table';
//import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';

import { GoChecklist } from 'react-icons/go';

import { array as dataPedidosProdutos } from '../../services/dataPedidosProdutos';

import { PageContent } from './styles';

const StatusBadge = styled.div`
   width: 56%;
   padding: 3px;
   border-radius: 5px;

   text-align: center;
   text-transform: uppercase;
   font-size: 13px;
   font-weight: 600;
   letter-spacing: 0.5px;
   line-height: 15px;
   color: ${(props) => props.color};
   background-color: ${(props) => props.bgColor};
`;

export function PedidosProdutos() {
   const dispatch = useDispatch();

   //const [exibirModal, setExibirModal] = useState(false);
   let statusPedido = [
      0,
      { color: '#fff', bgColor: '#c10', desc: 'Registrado' },
      { color: '#000', bgColor: '#ee2', desc: 'Recebido' },
      {
         color: '#fff',
         bgColor: '#271',
         desc: 'Aguardando retirada',
      },
      { color: '#fff', bgColor: '#222', desc: 'Cancelado' },
      { color: '#fff', bgColor: '#21a', desc: 'Retirado' },
      { color: '#444', bgColor: '#fff', desc: 'Finalizado' },
   ];

   useEffect(() => {
      dispatch({
         type: '@usuarios/SET_TOKEN',
         payload: {
            nome: 'Rafael Bevilacqua',
            nome_funcao: 'Divulgador',
            nome_perfil: 'Livreiro',
            nome_local: 'Núcleo Vila Carrão',
            cor_perfil: '#23e',
         },
      });
   });

   /*
   function fecharModal() {
      setExibirModal(false);
   }
   */

   return (
      <>
         <PageTitle
            title="Pedidos"
            subtitle="Núcleo Vila Carrão"
            color="#13b"
            cartIcon={true}
            icon={
               <GoChecklist
                  style={{
                     borderRadius: '5px',
                     padding: '3px',
                  }}
                  color="#13b"
                  size="50"
               />
            }
         />
         <PageContent>
            <Table striped>
               <thead
                  style={{
                     borderTop: '2px solid #bbb',
                     borderBottom: '3px solid #bbb',
                  }}
               >
                  <tr style={{ fontSize: '16px', fontFamily: 'Lato' }}>
                     <th width="10%">Número</th>
                     <th width="15%">Data/hora</th>
                     <th width="25%">Núcleo</th>
                     <th width="15%">Status</th>
                     <th width="22%">Livreiro</th>
                     <th width="13%">Valor total (R$)</th>
                  </tr>
               </thead>
               <tbody
                  style={{
                     fontSize: '16px',
                     fontWeight: 400,
                     fontFamily: 'Lato',
                  }}
               >
                  {dataPedidosProdutos.map((item, index) => (
                     <tr key={index} style={{ borderBottom: '2px solid #bbb' }}>
                        <td>{item.codPedido}</td>
                        <td>{item.data_hora}</td>
                        <td>{item.assoc_local}</td>
                        <td>
                           <StatusBadge
                              color={statusPedido[item.status].color}
                              bgColor={statusPedido[item.status].bgColor}
                           >
                              {statusPedido[item.status].desc}
                           </StatusBadge>
                        </td>
                        <td
                           style={{
                              textAlign: 'left',
                           }}
                        >
                           {item.livreiro}
                        </td>
                        <td
                           style={{
                              textAlign: 'right',
                           }}
                        >
                           {item.valor_total}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </Table>
         </PageContent>
      </>
   );
}
