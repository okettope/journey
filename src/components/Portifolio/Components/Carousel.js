import React, { Component } from 'react';
import Card from '../Components/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import LineHeads from './LineHeads';
import CornDesign from '../Components/imgs/CornDesign.jpg'
import CornCodes from '../Components/imgs/CornCodes.jpg'






class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Corn Design',
                    subTitle: 'Graphics Design',
                    Content: CornDesign,
                    link: "http://www.google.com",
                    selected: false
                },

                
                    {
                        id: 1,
                        title: 'Corn Codes',
                        subTitle: 'Web Development',
                        Content: CornCodes,
                        link: '../Pages/ComingSoon.js',
                        selected: false
                    },


            ]

        }
    }

    handleCardClick = (id, card) =>  {
        let items=[...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach( item =>{
            if(item.id!== id) {
                item.selected =false;
            }
        }

        );

        this.setState({
            items
        });
 
    }


    makeItems =  (items) => {
        return items.map(item  =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id , e))} key={items.id}/>
        })
    }

    render() {
        return (
            
            <Container fluid={true}>
            <hr/>
                <LineHeads/>

                <Row className="justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}
 
export default Carousel
