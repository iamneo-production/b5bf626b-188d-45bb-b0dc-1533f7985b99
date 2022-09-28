import React from 'react'

const addprod = () => {
  return (
    <div>
      <form>
        <h3>Add a Product</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input type="text" className="form-control" placeholder="Enter Price" />
        </div>

        <div className="mb-3">
          <label>Stock</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Stock Size"
          />
        </div>

        <div className="mb-3">
          <label>Rating</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Rating"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  )
}

export default addprod
