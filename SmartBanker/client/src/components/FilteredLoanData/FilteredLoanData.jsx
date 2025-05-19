import React, {useState, useEffect} from 'react'
import styles from './filteredLoanData.module.css'
import axios from 'axios';

const FilteredLoanData = ({filters}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchFilteredAccounts = async () => {
        if(!filters.loanType || filters.bank.length === 0) return;
  
        setLoading(true);
  
        try {
          const responce = await axios.post('http://localhost:3001/api/filter-loans', filters);
          setData(responce.data)
        } catch(err) {
          console.error('Error fetching filtered accounts:', err);
        }
        setLoading(false);
      }
  
      fetchFilteredAccounts();
    }, [filters]);
  
    if (loading) return <p>Loading...</p>;
  
    if (data.length === 0) return <p>No data found {data}</p>;

  return (
    <div  className={styles.filteredloanData} >
        <div className={styles.loanSummary}>
            <h1>Loan Details : {filters.loanType}</h1>
            <p className={styles.description}>{data.length > 0 ? data[0].loan_description : ''}</p>
        </div>
        <div className={styles.filteredLoanDetails}>
            <div className={`${styles.detailsColumn}`}>
                <div className={`${styles.rowHeader}`}>Bank Name</div>
                <div className={`${styles.rowHeader}`}>Interes Ratet</div>
                <div className={`${styles.rowHeader}`}>Procession Fee</div>
                <div className={`${styles.rowHeader}`}>Foreclosure Charges</div>
                <div className={`${styles.rowHeader}`}>Processing Time</div>
            </div>
            <div className={`${styles.dataContainer}`}>
            {data.map((item, index) => (
                <div key={index} className={styles.dynamicColumn}>
                <div className={`${styles.data} ${styles.dataHeader}`}>{item.bank_name}</div>
                <div className={styles.data}>{item.interest_rate}</div>
                <div className={styles.data}>{item.processing_fee}</div>
                <div className={styles.data}>{item.foreclosure_charges}</div>
                <div className={styles.data}>{item.processing_duration}</div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default FilteredLoanData