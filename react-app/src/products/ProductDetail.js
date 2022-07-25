import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, InputDetail} from '../components';


function ProductDetail({
  product: initProduct,
  handleCancelProduct,
  handleSaveProduct,
  history,
}) {
  const [product, setProduct] = useState(Object.assign({}, initProduct));

  useEffect(() => {
    if (!product) {
      history.push('/products'); // no product, bail out of Details
    }
  }, [product, history]);

  function handleSave() {
    const chgProduct = { ...product, id: product.id || null };
    handleSaveProduct(chgProduct);
  }

  function handleNameChange(e) {
    setProduct({ ...product, name: e.target.value });
  }

  function handleDescriptionChange(e) {
    setProduct({ ...product, description: e.target.value });
  }


  function handleImageChange(e) {
    setProduct({ ...product, image: e.target.value });
  }

  return (
    <div className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">
          {product.name}
          &nbsp;
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {product.id && (
            <InputDetail name="id" value={product.id} readOnly="true" />
          )}
          <InputDetail
            name="Recipe Name"
            value={product.name}
            placeholder="Enter a name for your recipe"
            onChange={handleNameChange}
          />
          <InputDetail
            name="Ingredients"
            value={product.description}
            placeholder="Enter details of your recipe"
            type="text"
            onChange={handleDescriptionChange}
          />
          <div className="field">
             <label className="label" htmlFor="image">
              image
            </label>
            <input
              name="Image"
              className="input"
              type="file"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
      <footer className="card-footer ">
        <ButtonFooter
          className="cancel-button"
          iconClasses="fas fa-undo"
          onClick={handleCancelProduct}
          label="Cancel"
        />
        <ButtonFooter
          className="save-button"
          iconClasses="fas fa-save"
          onClick={handleSave}
          label="Save"
        />
      </footer>
    </div>
  );
}

export default withRouter(ProductDetail);
