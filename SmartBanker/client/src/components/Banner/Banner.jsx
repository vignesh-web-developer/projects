import React, {useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './Banner.module.css'
import { assets } from '../../assets/assets'


const Banner = () => {

    const navigate = useNavigate();
    const bannerRef = useRef(null);

  useEffect(() => {
    function adjustBannerMargin() {
      const navbar = document.getElementById('navbar');
      if (navbar && bannerRef.current) {
        const navbarHeight = navbar.offsetHeight;
        bannerRef.current.style.marginTop = `${navbarHeight + 5}px`;
      }
    }   

    adjustBannerMargin();
    window.addEventListener('resize', adjustBannerMargin);

    return () => {
      window.removeEventListener('resize', adjustBannerMargin);
    };
  }, []);
      

  return (
    <div>
        <div ref={bannerRef} className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.content}> <h1>Looking for the best<br />loan, card, or account?<br /> <span className={styles.comapre_text}>Compare banks here.</span></h1> </div>
                <div className={styles.searchbar}> 
                    <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
                    <input type="search" placeholder='What are you looking for today?'/>
                </div>
                <div className={styles.products_container}>
                    <div className={`${styles.products}`} onClick={() => navigate('/Accounts')}>
                        <span className={`material-symbols-outlined`}>account_balance</span>Accounts
                        </div>
                    <div className={`${styles.products}`} onClick={() => navigate('/Loans')}>
                        <span class="material-symbols-outlined">real_estate_agent</span>Loans
                        </div>
                    <div className={`${styles.products}`}>
                        <span class="material-symbols-outlined">credit_card</span>Cards
                        </div>
                    <div className={`${styles.products}`}>
                        <span class="material-symbols-outlined">money_bag</span>
                        Deposits</div>
                    <div className={`${styles.products}`}>
                        <span class="material-symbols-outlined">shield_with_heart</span>
                        Insurance</div>
                    <div className={`${styles.products}`}>
                        <span class="material-symbols-outlined">finance_mode</span>
                        Investments</div>
                </div>
            </div>
            <div className={styles.img_container}>
                <img src={assets.home_page_bg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner