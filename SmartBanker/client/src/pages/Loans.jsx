import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Trackbar from '../components/Trackbar/Trackbar'
import LoanFilter from '../components/LoanFilter/LoanFilter'
import FilteredLoanData from '../components/FilteredLoanData/FilteredLoanData'

const Loans = () => {

const [filters, setFilters] = useState({
    loanType: '',
    bank: []
})

  return (
    <div className='loan_page'>
        <Navbar />
        <Trackbar currentPage="Loans" />
        <LoanFilter filters={filters} setFilters={setFilters} />
        <FilteredLoanData filters={filters}/>
    </div>
  )
}

export default Loans