import React, {useEffect, useRef} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
// import { assets } from '../../assets/assets'
import styles from './Trackbar.module.css'


const Trackbar = (props) => {

    const navigate = useNavigate();

     const trackbarRef = useRef(null);
    
      useEffect(() => {
        function adjustTrackbarMargin() {
          const navbar = document.getElementById('navbar');
          if (navbar && trackbarRef.current) {
            const navbarHeight = navbar.offsetHeight;
            trackbarRef.current.style.marginTop = `${navbarHeight}px`;
          }
        }   
    
        adjustTrackbarMargin();
        window.addEventListener('resize', adjustTrackbarMargin);
    
        return () => {
          window.removeEventListener('resize', adjustTrackbarMargin);
        };
      }, []);
          


  return (
        <div ref={trackbarRef} className={styles.trackbar}>
            <span className={`${styles.page} ${styles.homepage}`} onClick={() => navigate('/Home')}>Home</span>
            <span className={styles.arrow}>➤</span>
            <span className={styles.page}>{props.currentPage}</span>
        </div>
  )
}

export default Trackbar