import React from "react";

const ShoeCard = ({data,updateCounte}) => {
  const shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}` }>
      <img data-cy="shoe-card-image" alt="shoe" src={data.image} />
      <div>
        <div data-cy="shoe-name">shoe-name: {data.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">{data.cart_quantity}</div>
          <button data-cy="increment-shoe-count-button" onClick={()=>updateCounte({data:data,val:data.cart_quantity+1})}>+</button>
          <button data-cy="decrement-shoe-count-button" onClick={()=>updateCounte({data:data,val:data.cart_quantity-1})}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
