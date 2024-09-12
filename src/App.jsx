import {useState}from 'react';

const App = () => {
  const [cart,setCart] = useState(0);
  const [cartCount,setcartCount] = useState(1);
  const handleAdd = ()=>setCart(cart + 1);
  const handleEdit =() =>{
    if(cartCount>0){
      setCart(cartCount-1);
    }
  }
  return (
    <>
    <h1>Number of items in the cart :{cart}</h1>
    <button onClick={handleAdd}>Add to cart </button>
    <h1>Edit items in the cart :{cartCount}</h1>
    <button onClick={handleEdit}> Remove from cart </button>

   </>
  )
}

export default App;
