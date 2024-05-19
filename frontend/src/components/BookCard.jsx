import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = ({book}) => {

  return (
    <div className='card-container pb-xl-5'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3 className=" text-light"><span className=" text-light">Author: </span>{book.author}</h3>
        <p className=" text-light">publisher: {book.publisher}</p>
        <p>id: {book.isbn}</p>
        <p>Updated Date: {book.updated_date}</p>
      </div>
    </div>
  );
};

export default BookCard;