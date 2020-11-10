const delay = 300;
const user = {
    name: 'Mango',
    email:'mango@gmail.com',
    avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
};

const fetchUser = () => {
    new Promise(resolve => setTimeout(() => resolve(user), delay));
};

export default {fetchUser};