import React from 'react'
import styles from './AccountFilter.module.css'

import Banks from '../Banks/Banks'



const AccountFilter = ({filters, setFilters}) => {

    const handleAccountTypeClick = (type) => {
        if(filters.accountType !== type) {
            setFilters(prev => ({...prev, accountType: type}))
        }
    }

    const handleHolderTypeClick = (type) => {
        if(filters.holderType !== type) {
            setFilters(prev => ({...prev, holderType: type}))
        }
    }

  return (
    <div className={styles.AccountFilter}>
    <div className={`${styles.ac_type_container} ${styles.filters} `}>
        <h1>Account Type</h1>
        <div className={styles.ac_type_list}>
            <div className={`${styles.ac_type} savings item ${filters.accountType === 'savings' ? styles.selected : ''}`} onClick={()=> handleAccountTypeClick('savings')}>
                <span className={`material-symbols-outlined`}>savings</span>
                Savings
            </div>
            <div className={`${styles.ac_type} salary item ${filters.accountType === 'salary' ? styles.selected : ''}`} onClick={()=> handleAccountTypeClick('salary')}>
                <span className={`material-symbols-outlined`}>payments</span>
                Salary
                </div>
            <div className={`${styles.ac_type} nri item ${filters.accountType === 'nri' ? styles.selected : ''}`} onClick={()=> handleAccountTypeClick('nri')}>
                <span className="material-symbols-outlined">language</span>
                NRI</div>
        </div>
    </div>

    <div className={`${styles.holder_type_container} ${styles.filters}`}>
        <h1>Account Holder Type</h1>

        {filters.accountType == 'salary' || filters.accountType == 'nri' ? (
            <div className={styles.holder_type_list}>
                    
                <div className={`${styles.holder_type} item ${filters.holderType === 'General' ? styles.selected : ''}`} onClick={() => handleHolderTypeClick('General')} >
                <span className="material-symbols-outlined">person</span>
                General</div>
            
            </div> 
        ) : (
            <div className={styles.holder_type_list}>
                <div className={`${styles.holder_type} item ${filters.holderType === 'kids' ? styles.selected : ''}`} onClick={() => handleHolderTypeClick('kids')} >
                    <span className="material-symbols-outlined">account_child_invert</span>
                    Kids</div>
                <div className={`${styles.holder_type} item ${filters.holderType === 'student' ? styles.selected : ''}`} onClick={() => handleHolderTypeClick('student')} >
                    <span className="material-symbols-outlined">school</span>
                    Students</div>
                <div className={`${styles.holder_type} item ${filters.holderType === 'General' ? styles.selected : ''}`} onClick={() => handleHolderTypeClick('General')} >
                    <span className="material-symbols-outlined">person</span>
                    General</div>
                <div className={`${styles.holder_type} item ${filters.holderType === 'women' ? styles.selected : ''}`} onClick={() => handleHolderTypeClick('women')} >
                    <span className="material-symbols-outlined">female</span>
                    Women</div>
                <div className={`${styles.holder_type} item ${filters.holderType === 'senior' ? styles.selected : ''}`} onClick={() => handleHolderTypeClick('senior')} >
                    <span className="material-symbols-outlined">elderly</span>
                    Senior Citizen</div>
            </div>
        )}
    </div>
    
    <div className={`${styles.bank} ${styles.filters}`}>
        <h1>Select Bank</h1>
        <Banks filters={filters} setFilters={setFilters} />
    </div>
        
 </div>
    
  )
}

export default AccountFilter