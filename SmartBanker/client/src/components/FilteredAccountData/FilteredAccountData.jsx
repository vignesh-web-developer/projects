import React, {useEffect, useState} from 'react'
import styles from './FilteredAccountData.module.css'
import axios from 'axios';
// import { assets } from '../../assets/assets'

const FilteredAccountData = ({filters}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilteredAccounts = async () => {
      if(!filters.accountType || !filters.holderType || filters.bank.length === 0) return;

      setLoading(true);

      try {
        const responce = await axios.post('http://localhost:3001/api/filter-accounts', filters);
        setData(responce.data)
      } catch(err) {
        console.error('Error fetching filtered accounts:', err);
      }
      setLoading(false);
    }

    fetchFilteredAccounts();
  }, [filters]);

  if (loading) return <p>Loading...</p>;

  if (data.length === 0) return <p>No accounts found {data}</p>;

  return (
    <>
     <div className={styles.detailsTitle}>
      <h1>Account Details:</h1>
     </div>
      <div className={styles.filteredAccountData}>
          <div className={`${styles.detailsColumn}`}>
            <div className={`${styles.rowHeader}`}>Bank Name</div>
            <div className={`${styles.rowHeader}`}>Min/Avg Balance</div>
            <div className={`${styles.rowHeader}`}>Rate of Interest</div>
            <div className={`${styles.rowHeader}`}>Internet/Mobile<br />Banking</div>
            <div className={`${styles.rowHeader}`}>Premium Accounts</div>
            <div className={`${styles.rowHeader}`}>No of ATM's<br />and Branches</div>
            <div className={`${styles.rowHeader}`}>Atm Withdraw Limit</div>
            <div className={`${styles.rowHeader}`}>Non-Maintance Charges</div>
            <div className={`${styles.rowHeader}`}>Maintance Charges</div>
            <div className={`${styles.rowHeader}`}>A/c Opening Charges</div>
            <div className={`${styles.rowHeader}`}>Cusomter Service</div>
          </div>
          <div className={`${styles.dataContainer}`}>
            {data.map((item, index) => (
              <div key={index} className={styles.dynamicColumn}>
                <div className={`${styles.data} ${styles.dataHeader}`}>{item.bank_name}</div>
                <div className={styles.data}>{item.min_balance}</div>
                <div className={styles.data}>{item.interest_rate}</div>
                <div className={styles.data}>{item.internet_banking ? 'Yes' : 'No'}</div>
                <div className={styles.data}>{item.premium_account ? 'Yes' : 'No'}</div>
                <div className={styles.data}>{item.atm_branches}</div>
                <div className={styles.data}>{item.withdraw_limit}</div>
                <div className={styles.data}>{item.non_maint_charges}</div>
                <div className={styles.data}>{item.maint_charges}</div>
                <div className={styles.data}>{item.opening_charges}</div>
                <div className={styles.data}>{item.customer_service}</div>
              </div>
            ))}
          </div>
      </div>
    </>
  )
}

export default FilteredAccountData