import React from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import { Typography } from '@mui/material';
class App extends React.Component{
  render(){
  return (
    <div >
      <Typography variant='h4' sx={{textAlign:"center"}}>Product List</Typography>
     <ProductList />
     
    </div>
  );
}
}
export default App;
