import React from 'react'
import Header from '../../components/Header'
import Sidemenu from '../../components/Sidemenu'
import DashboardHero from './components/DashboardHero'

const Dashboard = () => {
  return (
    <div>
        <Header />
        <div>
            <Sidemenu />
            <DashboardHero />
        </div>
    </div>
  )
}

export default Dashboard