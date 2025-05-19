import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Trackbar from '../components/Trackbar/Trackbar'
import AccountFilter from '../components/AccountFilter/AccountFilter'
import FilteredAccountData from '../components/FilteredAccountData/FilteredAccountData'
// import { assets } from '../assets/assets'


const SavingsAccount = () => {

  const [filters, setFilters] = useState({
    accountType:'',
    holderType:'',
    bank: []
  })

  return (
    <div className='accounts_page'>
      <Navbar />
      <Trackbar currentPage = "Accounts"/>
      <AccountFilter filters={filters} setFilters={setFilters} />
      <FilteredAccountData filters={filters}/>
    </div>
  )
}

export default SavingsAccount