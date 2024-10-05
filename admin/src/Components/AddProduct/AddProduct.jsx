import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import { backend_url } from "../../App";

const AddProduct = () => {

  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    description: false,
    old_price: false,
    new_price: false,
    category: false,
  });

  const handleFocus = (field) => {
    setFocusedFields((prevFocusedFields) => ({ ...prevFocusedFields, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusedFields((prevFocusedFields) => ({ ...prevFocusedFields, [field]: false }));
  };

 const AddProduct = async () => {
     let dataObj;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch(`${backend_url}/upload`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    }).then((resp) => resp.json())
      .then((data) => { dataObj = data });

    if (dataObj.success) {
      product.image = dataObj.image_url;
      await fetch(`${backend_url}/addproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => { data.success ? alert("Product Added") : alert("Failed") });

    }  }
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p className={focusedFields.name ? 'focused-label' : ''}>Product title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={(e) => { changeHandler(e) }}
          onFocus={() => handleFocus('name')}
          onBlur={() => handleBlur('name')}
          placeholder="Type here"
          className={focusedFields.name ? 'focused' : ''}
        />
      </div>
      <div className="addproduct-itemfield">
        <p className={focusedFields.description ? 'focused-label' : ''}>Product description</p>
        <input
          type="text"
          name="description"
          value={productDetails.description}
          onChange={(e) => { changeHandler(e) }}
          onFocus={() => handleFocus('description')}
          onBlur={() => handleBlur('description')}
          placeholder="Type here"
          className={focusedFields.description ? 'focused' : ''}
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p className={focusedFields.old_price ? 'focused-label' : ''}>Price</p>
          <input
            type="number"
            name="old_price"
            value={productDetails.old_price}
            onChange={(e) => { changeHandler(e) }}
            onFocus={() => handleFocus('old_price')}
            onBlur={() => handleBlur('old_price')}
            placeholder="Type here"
            className={focusedFields.old_price ? 'focused' : ''}
          />
        </div>
        <div className="addproduct-itemfield">
          <p className={focusedFields.new_price ? 'focused-label' : ''}>Offer Price</p>
          <input
            type="number"
            name="new_price"
            value={productDetails.new_price}
            onChange={(e) => { changeHandler(e) }}
            onFocus={() => handleFocus('new_price')}
            onBlur={() => handleBlur('new_price')}
            placeholder="Type here"
            className={focusedFields.new_price ? 'focused' : ''}
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p className={focusedFields.category ? 'focused-label' : ''}>Product category</p>
        <select 
          value={productDetails.category} 
          name="category" 
          className={focusedFields.category ? 'focused' : ''}
          onChange={changeHandler}
          onFocus={() => handleFocus('category')}
          onBlur={() => handleBlur('category')}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Product image</p>
        <label htmlFor="file-input">
          <img className="addproduct-thumbnail-img" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" id="file-input" accept="image/*" hidden />
      </div>
      <button className="addproduct-btn" onClick={() => { AddProduct() }}>ADD</button>
    </div>
  );
};

export default AddProduct;