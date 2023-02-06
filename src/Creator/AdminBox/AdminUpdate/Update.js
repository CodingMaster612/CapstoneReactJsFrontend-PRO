import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfile = () => {
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleImageUrlChange = event => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .patch(`/user/${email}/image_url`, { imageUrl })
      .then(response => {
        localStorage.setItem('imageUrl', imageUrl);
        console.log(`Image URL updated to ${imageUrl}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};
export default UpdateProfile;