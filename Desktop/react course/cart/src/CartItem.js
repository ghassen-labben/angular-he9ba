import { findByLabelText } from '@testing-library/react';
import React from 'react'
import Produit from './images/rbg.png'
class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: '$999',
            qty: 1,
            name: "Nike Blazer",
            img: Produit
        }
    }
    increaseQauntite = () => {
        this.setState({
            qty: this.state.qty + 1
        });
    }
    decreaseQuantity = () => {
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }

        });
    }
    render() {
        const { price, qty, name } = this.state;

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img src={this.state.img} style={styles.image} alt='product' />
                </div>
                <div className='right-block' style={styles.blockd}>
                    <div style={{ fontSize: 25, fontFamily: '"Amazon Ember",Arial,sans-serif', textTransform: 'capitalize', marginBottom: 15 }}>{name}</div>
                    <div style={{ color: '#143F6B' }}>{price}</div>
                    <div style={{ fontSize: 25 }} id="qty">Qty : {qty}</div>
                    <div className='cart-item-action' >
                        {/*buttons*/}
                        <img alt='increase' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/3024/premium/3024515.png?token=exp=1651424918~hmac=185a94918749dd3fe284cb43b8571132' style={styles.icons} onClick={this.increaseQauntite} />
                        <img alt='decrease' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/2767/premium/2767170.png?token=exp=1651425182~hmac=6ed191ecb075d9633620d4287530de3a' style={styles.icons} onClick={this.decreaseQuantity} onMouseOver={() => this.addClass = "icons2"} />
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' style={styles.icons} />

                    </div>

                </div>
            </div>
        )
    }
}
const styles = {

    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        border: 1,
        background: "#FD5D5D",
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px"
    },
    icons: {
        width: 35,
        height: 35,
        marginRight: 5,
        cursor: 'pointer'
    },
    blockd: {
        margin: "auto"
    }

}
export default CartItem;