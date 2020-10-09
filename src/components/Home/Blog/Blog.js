import React from 'react';
import wilson from '../../../images/Ellipse 1.png'
import BlogPost from './BlogPost';
const blogData = [
  {
      title : 'Check at least a doctor in a year for your teeth',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      author:'Dr. Cudi',
      authorImg : wilson,
      date : '23 April 2019'
  },
  {
      title : 'Two time brush in a day can keep you healthy',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      author:'Dr. Sinthia',
      authorImg : wilson,
      date : '23 April 2019'
  },
  {
      title : 'The tooth cancer is taking a challenge',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      author:'Dr. Cudi',
      authorImg : wilson,
      date : '23 April 2019'
  },
]
const Blog = () => {
  return (
    <section className="blog mt-5">
      <div className="container text-center">
        <div className="section-header">
          <h3 className="text-info text-uppercase">our blog</h3>
          <h2>From Our Blog News</h2>

        </div>
        <div className="card-deck mt-5">
          {blogData.map(blog => <BlogPost blog={blog}></BlogPost>)}

        </div>
      </div>
      
    </section>
  );
};

export default Blog;