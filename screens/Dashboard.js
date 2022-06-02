import React from 'react';
import Card from '../components/Card';
import Categories from '../components/Categories/Categories';
import SendMoney from '../components/SendMoney';
import TopBar from '../components/TopBar';
import Transactions from '../components/Transactions/Transactions';

const Dashboard = ({ toggle }) => {
  return (
    <>
      <TopBar />
      <Card />
      <Categories toggle={toggle} />
      <SendMoney />
      <Transactions />
    </>
  )
}

export default Dashboard