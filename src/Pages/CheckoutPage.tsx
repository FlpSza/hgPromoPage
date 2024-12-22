import React, { useState } from 'react';

const CheckoutPage = () => {
  const [promoCode, setPromoCode] = useState('');

  const handlePromoCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(event.target.value);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <input type="text" placeholder="Endereço" />
        <input type="text" placeholder="CPF" />
        <input
          type="text"
          placeholder="Código Promocional"
          value={promoCode}
          onChange={handlePromoCodeChange}
        />
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
