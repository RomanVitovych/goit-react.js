import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
    container: {textAlain: 'center'},
    status: {fontSize: 96, marginBottom: 16}
}

const NotFound = () => {
    return (
        <div styles={styles.container}>
           <h1 styles={styles.status}>404</h1> 
           <p>Whops...!!! <Link to='/' >Посилання </Link>на головну сторінку</p>
        </div>
    );
};

export default NotFound;