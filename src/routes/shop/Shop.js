import React, { Component } from 'react';
import ShopCard from '../../cards/shopCard/ShopCard';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { BLACKHOODIE } from '../../assets/imageArrays/shop/blackHoodie/BlackHoodie';
import { GREYHOODIE } from '../../assets/imageArrays/shop/greyHoodie/GreyHoodie';
import { HAT1 } from '../../assets/imageArrays/shop/hat1/Hat1';
import { HAT2 } from '../../assets/imageArrays/shop/hat2/Hat2';
import { HAT3 } from '../../assets/imageArrays/shop/hat3/Hat3';
import { HAT4 } from '../../assets/imageArrays/shop/hat4/Hat4';
import './Shop.css'


export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectHoodies: "",
            showHoodieOptions: "none",
            selectHats: "",
            showHatOptions: "none",
            back: "none",
            itemImage: BLACKHOODIE,
            itemName: "AAC Black Hoodie",
            itemPrice: "$35",
            sizes: ""
        }
    }
    
    selectHoodies(){
        this.setState({
            selectHoodies: "none"
        });
        this.setState({
            showHoodieOptions: "block"
        });
        this.setState({
            back: "block"
        });
    }

    selectHats(){
        this.setState({
            selectHats: "none"
        });
        this.setState({
            selectHoodies: "none"
        });
        this.setState({
            showHatOptions: "block"
        });
        this.setState({
            back: ""
        });
    }

    toggleBack(){
        this.setState({
            selectHoodies: "",
            showHoodieOptions: "none",
            selectHats: "",
            showHatOptions: "none",
            back: "none",
            itemImage: BLACKHOODIE,
            itemName: "AAC Black Hoodie",
            itemPrice: "$35",
            sizes: ""          
        });
    }

    blackHoodie(){
        this.setState({
            itemImage: BLACKHOODIE,
            itemName: "AAC Black Hoodie",
            itemPrice: "$35"             
        });
    }

    greyHoodie(){
        this.setState({
            itemImage: GREYHOODIE,
            itemName: "AAC Grey Hoodie",
            itemPrice: "$35"            
        });
    }

    hatStyle1(){
        this.setState({
            itemImage: HAT1,
            itemName: "AAC Flag Logo Black Hat",
            itemPrice: "$25",
            sizes: "none"            
        });
    }

    hatStyle2(){
        this.setState({
            itemImage: HAT2,
            itemName: "AAC Silver Logo Black Hat",
            itemPrice: "$25",
            sizes: "none"               
        });
    }

    hatStyle3(){
        this.setState({
            itemImage: HAT3,
            itemName: "AAC Gold Logo Black Hat",
            itemPrice: "$25",
            sizes: "none"               
        });
    }

    hatStyle4(){
        this.setState({
            itemImage: HAT4,
            itemName: "AAC Gold Logo Blue Hat",
            itemPrice: "$25",
            sizes: "none"               
        });
    }
    
    render(){
     return(
        <Container>
            <Row>
                <Col className="mt-3">
                    <h2>Shop</h2>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col xs={2} className="menu mb-3">
                    <Row id="hoodies" className="" style={{display: this.state.selectHoodies}}>
                        <Col>
                            <h3 onClick={() => this.selectHoodies()} className="button text-center pt-2">Hoodies</h3>
                        </Col>
                    </Row>
                    <Row style={{display: this.state.selectHoodies}}>
                        <Col>
                            <h3 onClick={() => this.selectHats()} className="button text-center pt-2">Hats</h3>
                        </Col>
                    </Row>
                    <Row style={{display: this.state.showHoodieOptions}}>
                        <Col>
                            <h3 onClick={() => this.blackHoodie()} className="button text-center pt-2">Black</h3>
                        </Col>
                    </Row>
                    <Row style={{display: this.state.showHoodieOptions}}>
                        <Col>
                            <h3 onClick={() => this.greyHoodie()} className="button text-center pt-2">Grey</h3> 
                        </Col>
                    </Row>
                    <Row style={{display: this.state.showHatOptions}}>
                        <Col>
                            <h3 onClick={() => this.hatStyle1()} className="button text-center pt-2">Style 1</h3> 
                        </Col>
                    </Row>
                    <Row style={{display: this.state.showHatOptions}}>
                        <Col>
                            <h3 onClick={() => this.hatStyle2()} className="button text-center pt-2">Style 2</h3> 
                        </Col>
                    </Row>
                    <Row style={{display: this.state.showHatOptions}}>
                        <Col>
                            <h3 onClick={() => this.hatStyle3()} className="button text-center pt-2">Style 3</h3> 
                        </Col>
                    </Row>
                    <Row style={{display: this.state.showHatOptions}}>
                        <Col>
                            <h3 onClick={() => this.hatStyle4()} className="button text-center pt-2">Style 4</h3> 
                        </Col>
                    </Row>
                    <Row style={{display: this.state.back}}>
                        <Col>
                            <h3 onClick={() => this.toggleBack()}className="button text-center pt-2 pr-2"><FontAwesomeIcon icon={faArrowLeft} /> Back</h3> 
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={8} md={6} lg={6} className="mb-3 d-flex justify-content-center">
                    <ShopCard itemImage={this.state.itemImage} itemName={this.state.itemName} itemPrice={this.state.itemPrice} sizes={this.state.sizes}/>
                </Col>
            </Row>        
        </Container>
    );
}
}