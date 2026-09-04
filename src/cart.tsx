export default function Cart() {
     
     let counter = 0;

     const handleAddToCart = () => {
        counter++;
        alert(`Item added to cart! Total items: ${counter}`);
     }

     return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Items in the Cart: {counter}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
  }