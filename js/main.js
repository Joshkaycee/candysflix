const darkBtn = document.querySelector('#dark');
const menuBar = document.querySelector('.fa-bars');
const closeBar = document.querySelector('.fa-xmark');
const menu = document.querySelector('.ul');
const links = document.querySelectorAll('.ul li a');

const body = document.body;

const oneDay = math.round(Date.now()* 1000)
console.log(math.floor(new Date().getTime() * 1000))
const interval = setInterval(oneDay, 1000)

console.log(new Date(Date.now() + 1000 * 86400));
console.log(interval);
links.forEach((link) => {
  link.addEventListener('click', function() {
    menu.classlist.remove('drop');
    links.forEach(link => {
      link.classlist.remove('active')
      this.classlist.add('active')
    })
  })
});


menuBar.addEventListener('click', () => {
  menu.classlist.add('drop')
})
closeBar.addEventListener('click', () => {
  menu.classlist.remove('drop')
})


darkBtn.addEventListener('click', () => {
  body.classlist.toggle('darkmode')
  if(darkBtn,classlist.contains('fa-moon')){
    darkBtn.classlist.toggle('fa-sun', 'fa-sun')
    darkBtn.style.color = 'white';
  }else{
    darkBtn.classlist.toggle('fa-sun', 'fa-sun') 
    darkBtn.style.color = 'black';
  }
  
})