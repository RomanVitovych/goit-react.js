import React from 'react';
import Product from './Module_1-2/Product';
import Section from './Module_1-2/Section';
import Booklist from './Module_1-2/Booklist';

const favouriteBooks = [
    { id: 'id-1', name: 'JS for beginners' },
    { id: 'id-2', name: 'React basics' },
    { id: 'id-3', name: 'React Router overview' },
    { id: 'id-4', name: 'Redux in depth' },
  ];
  

function App () {
    return (
      <>
      <Booklist books={favouriteBooks} />
      <h1>Welcome</h1>
      <Section title='The best selling product'>
        <Product
        imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640'
        name="Tacos With Lime" 
        price={10.99}
        quantity={30}
        />
      </Section>
      <Section title='Recomended'>
        <Product
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        name="Fries and Burger" 
        price={14.29}
        quantity={100}
      />
      </Section>
    </>
    )
  };

  export default App;