import { useState } from "react";
import "./product.css"; // Import the CSS file

const CreateProduct = () => {
  const [productImg, setProductImg] = useState("");


  // eslint-disable-next-line
const [brand, setBrand] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    transformFileData(file);
  };

  const transformFileData = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate a successful product creation
    alert("Product created successfully!");
    // Reset the form fields
    setProductImg("");
    setBrand("");
    setName("");
    setPrice("");
    setDesc("");
  };

  return (
    <div className="StyledCreateProduct">
      <div className="FormContainer">
        <form className="StyledForm" onSubmit={handleSubmit}>
          <h3>Create a Product</h3>
          <input
            id="imgUpload"
            accept="image/*"
            type="file"
            onChange={handleProductImageUpload}
            required
          />
          <select onChange={(e) => setBrand(e.target.value)} required>
            <option value="">Select Brand</option>
            <option value="iphone">iPhone</option>
            <option value="samsung">Samsung</option>
            <option value="xiomi">Xiomi</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Short Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />

          <button className="PrimaryButton" type="submit">
            Submit
          </button>
        </form>
        <div className="ImagePreview">
          {productImg ? (
            <>
              <img src={productImg} alt="Product Preview" />
            </>
          ) : (
            <p>Product image upload preview will appear here!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
