import React from 'react'
const sampleItemImage = require('../../../assets/images/sample-product.jpg')
const styles = require('./ProductBlock.css')

const RenderProductBlock = (props) => {

    if(!props.itemProps.item) {
        return <React.Fragment/>
    }
    
    const { name, imageURL } = props.itemProps.item.properties
     return(
        <section className='col-lg-3 col-sm-6'>
            <div className={styles.productItem}>
                <div className={styles.piPic}>
                    <div className={styles.tagSale}>10% offer</div>
                    <img src={imageURL} alt="" />
                    <div className={styles.piLinks}>
                        <a href="#" className={styles.addCard}><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                        <a href="#" className={styles.wishlistButton}><i className="flaticon-heart"></i></a>
                    </div>
                </div>
                <div className={styles.piText}>
                    <h6>$35,00</h6>
                    <p>{name}</p>
                </div>
            </div>
        </section>
    )
}

class ProductBlock extends React.Component {
    render() {
        return(
            <RenderProductBlock itemProps={this.props}/>
        )
    }
}

export default ProductBlock