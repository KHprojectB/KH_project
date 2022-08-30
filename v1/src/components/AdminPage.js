import React, {Fragment} from 'react'

import MypageTop from './Admin/MypageTop'
import MypageSide from './Admin/MypageSide'
import Chart from './Admin/Chart'

const AdminPage = () => {
  return (
    <Fragment>
      <h1 className='admin'>Admin Page</h1>
      <MypageTop></MypageTop>
      <MypageSide></MypageSide>
      <Chart></Chart>
    </Fragment>
  )
}

export default AdminPage