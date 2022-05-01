import React from 'react'
import Produit from './images/download.jpg'
class CartItem extends React.Component {
    render() {
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img src={Produit} style={styles.image} alt='product' />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25, fontFamily: '"Amazon Ember",Arial,sans-serif', textTransform: 'capitalize' }}>phone</div>
                    <div style={{ color: '#143F6B' }}>999 TND</div>
                    <div style={{ fontSize: 25 }}>Qty : 150</div>
                    <div className='cart-item-action'>
                        {/*buttons*/}
                    </div>

                </div>
            </div>
        )
    }
}
const styles = {
    image: {
        width: 200,
        height: 200,
        borderRadius: 4,
        background: 'lightgray',
        border: 0
    },
}
export default CartItem;