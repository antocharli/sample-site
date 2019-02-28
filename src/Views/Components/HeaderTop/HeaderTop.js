import React from 'react'
const styles = require('./HeaderTop.css')
import logo from '../../../assets/images/logo.png'

const HeaderHTML = () => {
    return (
    <div className={styles.headerTop}>
        <div className="container">
            <div className="row">
                <div className="col-lg-2 text-center text-lg-left">
                    <a href="./index.html" className={styles.siteLogo}>
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="col-xl-6 col-lg-5">
                    <form className={styles.headerSearchForm}>
                        <input type="text" placeholder="Search on divisima ...." />
                        <button><i className="flaticon-search"></i></button>
                    </form>
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className={styles.userPanel}>
                        <div className={styles.upItem}>
                            <i className="flaticon-profile"></i>
                            <a href="#">Sign</a> In or <a href="#">Create Account</a>
                        </div>
                        <div className={styles.upItem}>
                            <div className={styles.shoppingCard}>
                                <i className="flaticon-bag"></i>
                                <span>0</span>
                            </div>
                            <a href="#">Shopping Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

class HeaderTop extends React.Component {
    render() {
        return(
            <HeaderHTML/>
        )
    }
}

export default HeaderTop
export { HeaderTop }
