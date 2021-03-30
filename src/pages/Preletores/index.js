import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import { CardPreletor } from '../../components/CardPreletor';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {
   PageContent,
   ParteSuperior,
   ParteInferior,
   AreaFoto,
   AreaPalestras,
   TituloSuperior,
   PreletorLocal,
   PalestrasArea,
   PalestraItem,
   PalestraData,
   PalestraDescricao,
   //   PalestraDescricao,
} from './styles';
import { array as dataPreletores } from '../../services/dataPreletores';

export function Preletores() {
   const [exibirModal, setExibirModal] = useState(false);
   //const [preletor] = useState({});

   function handleClose() {
      return true;
   }

   return (
      <>
         <PageTitle title="Preletores" color="#000" />
         <PageContent>
            {dataPreletores.map((item) => (
               <>
                  <Link onClick={() => setExibirModal(true)}>
                     <CardPreletor key={item.id} preletor={item} />
                  </Link>
               </>
            ))}
         </PageContent>

         <Modal show={exibirModal} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
               <Modal.Title>
                  <ParteSuperior>
                     <AreaFoto>
                        <img
                           width="100%"
                           src="https://docplayer.com.br/docs-images/63/50451885/images/11-3.jpg"
                           alt=""
                        />
                     </AreaFoto>
                     <TituloSuperior>Preletor Heitor Miyazaki</TituloSuperior>
                     <PreletorLocal>Sede internacional</PreletorLocal>
                  </ParteSuperior>
                  <ParteInferior>
                     <AreaPalestras>
                        <PalestrasArea>
                           <PalestraItem>
                              <PalestraData>10/03/2021</PalestraData>
                              <PalestraDescricao>
                                 Princípio do relógio de sol
                              </PalestraDescricao>
                           </PalestraItem>
                           <PalestraItem>
                              <PalestraData>10/03/2021</PalestraData>
                              <PalestraDescricao>
                                 A importância de orar pelos antepassados
                              </PalestraDescricao>
                           </PalestraItem>
                           <PalestraItem>
                              <PalestraData>10/03/2021</PalestraData>
                              <PalestraDescricao>
                                 As palavras criam o nosso destino
                              </PalestraDescricao>
                           </PalestraItem>
                        </PalestrasArea>
                     </AreaPalestras>
                  </ParteInferior>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
               asperiores repudiandae iusto facilis cum unde quia temporibus
               suscipit sunt officia blanditiis quasi commodi, ex saepe totam ea
               quos consequuntur neque!
            </Modal.Body>
            <Modal.Footer>
               <Button
                  variant="secondary"
                  onClick={() => setExibirModal(false)}
               >
                  Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
