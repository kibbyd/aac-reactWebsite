import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './GalleryModal.css';
import GalleryCarousel from '../../carousel/galleryCarousel/GalleryCarousel';

const GalleryModal = (props) => { 
        return (
            <Modal isOpen={props.modalState} className="modal-lg">
                <ModalHeader toggle={props.close}><h3>{props.event}</h3></ModalHeader>
                <ModalBody>               
                     <GalleryCarousel images={props.images}/>
                </ModalBody>
            </Modal>
        );
    }
  
    export default GalleryModal;