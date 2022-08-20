import React from "react";

const BookCard = ({ bookData }) => {
  return (
    <div>
      <img src="https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg" width='100%'  alt="cover-page" />
      <div>{bookData.book_name}</div>
      <div>{bookData.release_year}</div>
      <div>{bookData.catagory}</div>
    </div>
  );
};

export default BookCard;
