import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Comments from "../components/comment/Comments";
import NewComments from "../components/comment/NewComments";

import Img from "../assets/book1.jpg";

const SingleProductPage = () => {
  const [comments, setcomments] = useState([]);
  
  const [index, setIndex] = useState(0);
  const plusIndexHandler = () => {
    setIndex(index + 1);
  }

  const addcommentHandler = (comment) => {
    setcomments((prevcomments) => {
      return [comment, ...prevcomments];
    });
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <Wrapper>
      {/* <PageHero title={name} product /> */}
      <div className="section section-center page">
        <Link to="/products" className="btn">
          제품으로 돌아가기
        </Link>
        <div className="product-center">
          <img src={Img}></img>
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">
              {price / 100 < 1000 ? "대여가능" : "대여불가능"}
            </h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>재고 : </span>
              {stock > 0 ? "재고있음" : "재고없음"}
            </p>
            {/* <p className='info'>
              <span>Id :</span>
              {sku}
            </p> */}
            <p className="info">
              <span>카테고리 :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
      <Comments onAddcomment={addcommentHandler} plusIndexHandler={plusIndexHandler} index={index}></Comments>
      <div className="newComment">
        <NewComments items={comments} index={index}></NewComments>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .product-center img {
    margin-left: 8rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  .newComment {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
