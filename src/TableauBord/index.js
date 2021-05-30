import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import TableauCentral from './TableauCentral';
import './style.scss';

const TableauBord = () => {

  return (
    <>
      <Header Title1="Tableau de bord" Title2="Partner Name" />
      <Menu />
      <TableauCentral />
    </>
  )
}

export default TableauBord;