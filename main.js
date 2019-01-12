const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');

const getFoodsButton = document.getElementById('getFoods');
const getFoodButton = document.getElementById('getFood');
const postFoodButton = document.getElementById('postFood');
const editFoodButton = document.getElementById('editFood');
const removeFoodButton = document.getElementById('removeFood');

const token = localStorage.getItem('token');

registerButton.addEventListener('click', () => {
  fetch('https://cheapnycserver.herokuapp.com/users/register', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Mike',
      email: 'mikethetech@mail.com',
      password: '123456',
      confirmPassword: '123456'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});

loginButton.addEventListener('click', () => {
  fetch('https://cheapnycserver.herokuapp.com/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'mikethetech@mail.com',
      password: '123456'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resData => {
      console.log(resData);
      localStorage.setItem('token', resData.token);
    })
    .catch(err => console.log(err));
});

getFoodsButton.addEventListener('click', () => {
  fetch('https://cheapnycserver.herokuapp.com/foods')
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});

getFoodButton.addEventListener('click', () => {
  fetch('https://cheapnycserver.herokuapp.com/foods/5c391f53a30dd600041e81ff')
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});

postFoodButton.addEventListener('click', () => {
  fetch('https://cheapnycserver.herokuapp.com/foods', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Apples',
      price: '0.99',
      location: '123 Apple St',
      description: "This is a good apple"
    }),
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});

editFoodButton.addEventListener('click', () => {
  fetch('https://cheapnycserver.herokuapp.com/foods/5c391f53a30dd600041e81ff', {
    method: 'PUT',
    body: JSON.stringify({
      name: 'Watermelons',
      price: '1.99',
      location: '123 Fruit St',
      description: "This is fresh from the farm."
    }),
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});

removeFoodButton.addEventListener('click', () => {
  fetch('https://cheapnycserver.herokuapp.com/foods/5c39367c697b8b0004747ca4', {
    method: 'DELETE',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});