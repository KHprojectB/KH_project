import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { useMediaQuery } from "react-responsive";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  const isPhone = useMediaQuery({ query: "(max-width: 1024px)" });
  const isPc = useMediaQuery({ query: "(min-width: 1025px)" });

  return (
    <Wrapper className="section section-center">
      {/* <CartColumns /> */}
      {isPc &&
        cart.map((item) => {
          return <CartColumns key={item.id} {...item} />;
        })}
      {isPhone && 
      <div className="content">
        <div className="cart-title">
          <h5>#</h5>
          <h5>title</h5>
          <h5>price</h5>
          <h5>amount</h5>
          <h5>totalPrice</h5>
          <h5>#</h5>
          <hr></hr>
        </div>
      </div>}
      {isPhone &&
        cart.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          상품 계속 둘러보기
        </Link>
        <button type="button" className="link-btn clear-btn" onClick={clearCart}>
          카트 초기화
        </button>
        <button className="btn">대여하기</button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }

  .content {
    display: flex;
    flex-direction: column;
  }
  .cart-background {
    text-align: center;
    margin-bottom: 4rem;
  }
  .cart-title {
    display: grid;
    grid-template-columns: 120px 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    column-gap: 1rem;
    h5 {
      color: var(--clr-grey-5);
      font-weight: 400;
    }
  }
  hr {
      color: black;
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
`;
export default CartContent;
