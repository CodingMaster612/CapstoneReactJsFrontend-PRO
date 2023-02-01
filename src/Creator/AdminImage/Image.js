import React, { useState, useEffect } from 'react';
import '../AdminImage/image.css'

const ImageWithLocalStorage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const storedUrl = localStorage.getItem('imageUrl');
    if (storedUrl) {
      setImageUrl(storedUrl);
    }
  }, []);

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    localStorage.setItem('imageUrl', e.target.value);
  };

  return (
    <div>
      {/* <input type="text" value={imageUrl} onChange={handleImageUrlChange} /> */}
      {imageUrl && <img  className="personal-img"src={imageUrl} alt="Stored Image" />}
    </div>
  );
};

export default ImageWithLocalStorage;