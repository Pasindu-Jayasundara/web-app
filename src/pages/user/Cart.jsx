const Cart = () => {
    const cartItems = [
        { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
        { id: 2, name: 'Product 2', price: 49.99, quantity: 2 },
        { id: 3, name: 'Product 3', price: 19.99, quantity: 1 },
    ];

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <h2>Total: ${getTotalPrice()}</h2>
        </div>
    );
};

export default Cart;