import React, { Component } from 'react';
import GalleryCard  from '../../cards/galleryCard/GalleryCard';
import GalleryModal from '../../modals/galleryModal/GalleryModal';
import { OZARKSIMAGES } from '../../assets/imageArrays/gallery/ozarks/ozarksImageArray';
import { TOCIMAGES } from '../../assets/imageArrays/gallery/tournamentOfChampions/tournamentOfChampionsImageArray';
import { Container, Row, Col } from 'react-bootstrap';


export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            isGalleryModal1Open: false,
            isGalleryModal2Open: false
        }
    }

    toggleGalleryModal1() {
        this.setState({
            isGalleryModal1Open: !this.state.isGalleryModal1Open
        });
      } 
      
      toggleGalleryModal2() {
        this.setState({
            isGalleryModal2Open: !this.state.isGalleryModal2Open
        });
      }

    render(){
        return(
            <Container>
                <Row>
                    <Col className="mt-3">
                        <h2>Gallery</h2>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={8} md={6} lg={4} className="GalleryCard mt-3 mb-4 d-flex justify-content-center">
                        <GalleryCard img={require("../../assets/images/gallery/ozarks/event1.1.jpg")} event="Ozarks" date="15th March 2020" open={() => this.toggleGalleryModal1()} />
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} className="GalleryCard mt-3 mb-4 d-flex justify-content-center">
                        <GalleryCard img={require("../../assets/images/gallery/tournamentOfChampions/event2.1.jpg")} event="Tournament of Champions" date="4th September 2019" open={() => this.toggleGalleryModal2()} />
                    </Col>
                </Row>
                <Row>
                    <Col className="modal-xl">
                        <GalleryModal modalState={this.state.isGalleryModal1Open} close={() => this.toggleGalleryModal1()} event="Ozarks, March 15th 2020" images={OZARKSIMAGES} />
                        <GalleryModal modalState={this.state.isGalleryModal2Open} close={() => this.toggleGalleryModal2()} event="Tournament of Champions, September 4th 2019" images={TOCIMAGES} />
                    </Col>
                </Row>
                
            </Container>  
    );     
}
}