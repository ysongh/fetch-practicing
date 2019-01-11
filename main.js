const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');

const getFoodsButton = document.getElementById('getFoods');
const postFoodButton = document.getElementById('postFood');

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