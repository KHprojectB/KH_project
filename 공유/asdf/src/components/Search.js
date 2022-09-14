import React, { Fragment, useState } from "react";
import { useGlobalContext } from "../context/test";
import { FaSearch } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { useProductsContext } from "../context/products_context";
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import "./Search.css";
export default function SearchForm() {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')
  return (
    <Fragment>
      {/* {isSidebarOpen && <button className="search-btn" onClick={closeSidebar}>
        <GiCancel></GiCancel>
      </button>} */}
      <section className="show-search">
        <form onSubmit={(e) => e.preventDefault()} className="search-form">
          <div className="form-control">
            <label htmlFor="name"></label>
            <input type='text'
              name='text'
              value={text}
              placeholder='search'
              onChange={updateFilters} />
            <button className="search-btn">
              <FaSearch></FaSearch>
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
}
