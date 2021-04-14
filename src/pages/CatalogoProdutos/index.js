import { useState, useEffect } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';

import PageTitle from '../../components/PageTitle';

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { FaBook } from 'react-icons/fa';

import { AreaBuscaPedidos } from '../../components/AreaBuscaPedidos';

import {
   PageContent,
   ModalBody,
   ModalFotoArea,
   ModalInfoArea,
   ModalTitle,
   ModalSubtitle,
   ModalInfoProduto,
   QuantArea,
   QuantSinalMenos,
   QuantNumero,
   QuantSinalMais,
   BotaoMenos,
   BotaoMais,
} from './styles';

export function CatalogoProdutos() {
   const dispatch = useDispatch();
   const token = localStorage.getItem('token');
   //const cart = useSelector((state) => state.cart.itemsCart);

   const [exibirModal, setExibirModal] = useState(false);
   const [qtdProduto, setQtdProduto] = useState(1);
   const [categorias, setCategorias] = useState([]);
   const [categoria, setCategoria] = useState(1);
   const [produto, setProduto] = useState({});
   const [listaProdutos, setListaProdutos] = useState([]);
   //const [modalQtdProdutos, setModalQtdProdutos] = useState(0);

   /*
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
   */

   useEffect(() => {
      carregaCategorias().then((data) => {
         setCategorias([...data]);
      });
   }, [categorias]);

   useEffect(() => {
      carregaProdutos(categoria).then((data) => {
         setListaProdutos([...data]);
      });
   }, [categoria]);

   async function carregaCategorias() {
      let headers = { 'Content-Type': 'application/json' };
      if (token) {
         headers.Authorization = `Bearer ${token}`;
      }

      const categorias = await fetch('http://localhost:3333/categorias', {
         headers,
      });

      const json = await categorias.json();
      return json;
   }

   async function carregaProdutos(id_categoria) {
      let headers = { 'Content-Type': 'application/json' };
      if (token) {
         headers.Authorization = `Bearer ${token}`;
      }

      const produtos = await fetch(
         `http://localhost:3333/produtos/${id_categoria}`,
         { headers },
      );
      const json = await produtos.json();
      return json;
   }

   function changeCategoria(cat) {
      setCategoria(cat);
      setListaProdutos([]);
   }

   function adicionarProdutoCart(produto) {
      const volume = produto.volume ? produto.volume : '';
      const subtitulo = produto.subtitulo ? ` - ${produto.subtitulo}` : '';
      const nome_produto = `${produto.nome} ${volume} ${subtitulo}`;
      const valor = produto.valor.toFixed(2);
      const subtotal = valor * qtdProduto;

      let prod = {
         id: produto.id_prod,
         imagem: produto.imagem,
         nome: nome_produto,
         valor,
         qtd: qtdProduto,
         subtotal,
      };

      dispatch({
         type: '@cart/ADD_ITEM',
         payload: { prod },
      });

      fecharModal();
   }

   function abrirModal(id) {
      const produtoModal = listaProdutos.filter((item) => item.id_prod === id);
      setProduto(produtoModal[0]);

      setExibirModal(true);
   }

   function fecharModal() {
      setExibirModal(false);
   }

   return (
      <>
         <PageTitle
            title="Catálogo de produtos"
            subtitle="Núcleo Vila Carrão"
            color="#13b"
            cartIcon={true}
            icon={
               <FaBook
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
            <AreaBuscaPedidos
               categoria={categoria}
               categorias={categorias}
               changeCategoria={changeCategoria}
            />
            <Table striped>
               <thead>
                  <tr style={{ fontSize: '17px' }}>
                     <th width="5%">Estoque</th>
                     <th width="1%"></th>
                     <th width="31%">Descrição</th>
                     <th width="22%">Autor</th>
                     <th width="15%">Categoria</th>
                     <th width="6%">Preço (R$)</th>
                  </tr>
               </thead>
               <tbody style={{ fontSize: '20px', fontWeight: 400 }}>
                  {listaProdutos.map((item) => (
                     <tr
                        key={item.id_prod}
                        style={{
                           border: '2px solid #aaa',
                        }}
                     >
                        <td
                           style={{
                              textAlign: 'right',
                           }}
                        >
                           {item.qtd ? item.qtd : 0}
                        </td>
                        <td></td>
                        <td>
                           <a
                              onClick={() => abrirModal(item.id_prod)}
                              style={{ cursor: 'pointer' }}
                           >
                              {item.nome}{' '}
                              {item.volume
                                 ? `vol. ${item.volume} - ${item.subtitulo}`
                                 : ''}
                           </a>
                        </td>
                        <td>{item.autor}</td>
                        <td>{item.categoria}</td>
                        <td
                           style={{
                              textAlign: 'right',
                           }}
                        >
                           {item.valor ? item.valor.toFixed(2) : item.valor}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </Table>

            <Modal show={exibirModal} onHide={fecharModal} size="lg" centered>
               <ModalBody>
                  <ModalFotoArea>
                     <img width="100%" src={produto.imagem} alt="" />
                  </ModalFotoArea>
                  <ModalInfoArea>
                     <ModalTitle>
                        {produto.nome}{' '}
                        {produto.volume ? `vol. ${produto.volume}` : ''}
                     </ModalTitle>
                     <ModalSubtitle>{produto.subtitulo}</ModalSubtitle>

                     <Table size="sm" style={{ width: '70%' }}>
                        <tbody>
                           <tr>
                              <td>Autor</td>
                              <td>{produto.autor}</td>
                           </tr>
                           <tr>
                              <td>Editora</td>
                              <td>{produto.editora}</td>
                           </tr>
                           <tr>
                              <td>Edição</td>
                              <td>{produto.edicao}</td>
                           </tr>
                           <tr>
                              <td>ISBN</td>
                              <td>{produto.ISBN}</td>
                           </tr>
                           <tr>
                              <td>Valor</td>
                              <td>
                                 R${' '}
                                 {produto.valor
                                    ? produto.valor.toFixed(2)
                                    : produto.valor}
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <strong>Qtd. estoque</strong>
                              </td>
                              <td>
                                 <strong>{produto.qtd}</strong>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                     <QuantArea>
                        <QuantSinalMenos>
                           <BotaoMenos
                              onClick={() =>
                                 qtdProduto > 0
                                    ? setQtdProduto(qtdProduto - 1)
                                    : false
                              }
                           >
                              -
                           </BotaoMenos>
                        </QuantSinalMenos>
                        <QuantNumero>{qtdProduto}</QuantNumero>
                        <QuantSinalMais>
                           <BotaoMais
                              onClick={() => setQtdProduto(qtdProduto + 1)}
                           >
                              +
                           </BotaoMais>
                        </QuantSinalMais>
                     </QuantArea>
                  </ModalInfoArea>
               </ModalBody>
               <Modal.Footer>
                  <ModalInfoProduto>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Laborum sunt saepe reiciendis facilis numquam nulla nisi
                     officia laudantium ab obcaecati aut consequatur culpa
                     recusandae similique delectus natus accusantium, mollitia
                     ratione!
                  </ModalInfoProduto>
                  <Button
                     variant="primary"
                     onClick={() => adicionarProdutoCart(produto)}
                  >
                     Adicionar ao pedido
                  </Button>
                  <Button variant="secondary" onClick={fecharModal}>
                     Close
                  </Button>
               </Modal.Footer>
            </Modal>
         </PageContent>
      </>
   );
}
