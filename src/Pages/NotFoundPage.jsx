import React from 'react';
import { Link } from 'react-router-dom';
import VerticalText from '../component/VerticalText';

export default function NotFoundPage() {
  return (
    <div className='not-found'>
        <h2>404</h2>
      <h1>LOST IN THE <span>MAP?</span></h1>
      <Link to="/" className="read-more">Return Home &nbsp;<i className="fas fa-angle-double-right"></i></Link>
      
      <VerticalText />
    </div>
  );
}