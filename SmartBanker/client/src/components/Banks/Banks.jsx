import React from 'react'
import styles from './Banks.module.css'
import { banks } from '../../assets/assets'

const Banks = ({filters, setFilters}) => {

    const bankNames = [
        'SBI Bank',
        'HDFC Bank',
        'ICICI Bank',
        'Axis Bank',
        'Indian Bank',
        'Kotak Mahindra Bank',
        'Indusind Bank',
        'Canara Bank',
        'IOB Bank',
        'RBL Bank',
        'IDFC Bank'
      ];
    
    const logos = [
        banks.sbi,
        banks.hdfcbank,
        banks.icicibank,
        banks.axisbank,
        banks.indianbank,
        banks.kotak,
        banks.indusind,
        banks.canarabank,
        banks.iob,
        banks.rbl,
        banks.idfc
      ];
    
    const handleBankClick = (bankName) => {
        setFilters(prev => {
            const alreadySelected = prev.bank.includes(bankName);
            const updateBanks = alreadySelected ? prev.bank.filter(name => name !== bankName) : [...prev.bank, bankName];
            return {...prev, bank: updateBanks };
        });
    };

    // const bankLogosRef = useRef(null);

    // const handleScroll = (direction) => {
    //     const scrollAmount = bankLogosRef.current.offsetWidth * 0.3;
    //     if (direction === 'right') {
    //       bankLogosRef.current.scrollLeft += scrollAmount;
    //     } else {
    //       bankLogosRef.current.scrollLeft -= scrollAmount;
    //     }
    //   };


  return (
    <>
    
    <div className={styles.banklogosWrapper }>
        <div className={styles.banklogos}>
            {
                logos.map((src, i) => {
                    const bankName = bankNames[i];
                    const isSelected = filters.bank.includes(bankName);

                    return (
                        <div className={`${styles.bank_img_container} ${isSelected ? styles.bankSelected : ''}`} key={bankName} onClick={() => handleBankClick(bankName)}>
                            <img src={src} alt={`${bankName}-logo`} />
                        </div>
                    );

                
                } )
            }
        </div>
    </div>

    </>
  )
}

export default Banks