import React from 'react'
import styles from './LoanFilter.module.css';
import Banks from '../Banks/Banks';

const LoanFilter = ({filters, setFilters}) => {

    const handleLoanTypeClick = (type) => {
        if(filters.loanType !== type) {
            setFilters(prev => ({...prev, loanType: type}))
        }
    }

  
  return (
    <div className={styles.LoanFilter}>
       
          <div className={`${styles.loan_type_container} ${styles.filters} `}>
            <h1>Loan Type</h1>
            <div className={styles.loan_type_list}>
                <div className={`${styles.loan_type} savings item ${filters.loanType === 'personal loan' ? styles.selected : ''}`} onClick={()=> handleLoanTypeClick('personal loan')}>
                    <span className={`material-symbols-outlined`}>person</span>
                    Personal Loan
                </div>
                <div className={`${styles.loan_type} salary item ${filters.loanType === 'gold loan' ? styles.selected : ''}`} onClick={()=> handleLoanTypeClick('gold loan')}>
                    <span className={`material-symbols-outlined`}>diamond</span>
                    Gold Loan
                    </div>
                <div className={`${styles.loan_type} nri item ${filters.loanType === 'car loan' ? styles.selected : ''}`} onClick={()=> handleLoanTypeClick('car loan')}>
                    <span className="material-symbols-outlined">local_taxi</span>
                    Car Loan</div>

                <div className={`${styles.loan_type} nri item ${filters.loanType === 'home loan' ? styles.selected : ''}`} onClick={()=> handleLoanTypeClick('home loan')}>
                    <span className="material-symbols-outlined">real_estate_agent</span>
                    Home Loan</div>
                <div className={`${styles.loan_type} nri item ${filters.loanType === 'two wheeler loan' ? styles.selected : ''}`} onClick={()=> handleLoanTypeClick('two wheeler loan')}>
                    <span className="material-symbols-outlined">two_wheeler</span>
                    Two Wheeler Loan</div>
                <div className={`${styles.loan_type} nri item ${filters.loanType === 'loan against property' ? styles.selected : ''}`} onClick={()=> handleLoanTypeClick('loan against property')}>
                    <span className="material-symbols-outlined">apartment</span>
                    Loan Against Property</div>
            </div>
          </div>

          <div className={`${styles.bank} ${styles.filters}`}>
            <h1>Select Bank</h1>
            <Banks filters={filters} setFilters={setFilters} />
          </div>
        
    </div>

    
  )
}

export default LoanFilter