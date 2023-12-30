

const Home = document.getElementById('Home')
const About = document.getElementById('About')
const Project = document.getElementById('Project')
const Certificate = document.getElementById('Certificate')
const Contact = document.getElementById('Contact')



const liHome = document.getElementById('liHome')
const liAbout = document.getElementById('liAbout')
const liProject = document.getElementById('liProject')
const liCertificate = document.getElementById('liCertificate')
const liContact = document.getElementById('liContact')
const touch = document.getElementById('touch')

liHome.addEventListener('click',()=>{
    Home.classList.add('Show')
    About.classList.remove('Show')
    Project.classList.remove('Show')
    Certificate.classList.remove('Show')
    Contact.classList.remove('Show')
    

})
liAbout.addEventListener('click',()=>{
    About.classList.add('Show')
    Home.classList.remove('Show')
    Project.classList.remove('Show')
    Certificate.classList.remove('Show')
    Contact.classList.remove('Show')

})
liProject.addEventListener('click',()=>{
    Project.classList.add('Show')
    Home.classList.remove('Show')
    About.classList.remove('Show')
    Certificate.classList.remove('Show')
    Contact.classList.remove('Show')

})
liCertificate.addEventListener('click',()=>{
    Certificate.classList.add('Show')
    Home.classList.remove('Show')
    About.classList.remove('Show')
    Project.classList.remove('Show')
    Contact.classList.remove('Show')

})
liContact.addEventListener('click',()=>{
    Contact.classList.add('Show')
    Home.classList.remove('Show')
    About.classList.remove('Show')
    Project.classList.remove('Show')
    Certificate.classList.remove('Show')

})
touch.addEventListener('click',()=>{
    Contact.classList.add('Show')
    Home.classList.remove('Show')
    About.classList.remove('Show')
    Project.classList.remove('Show')
    Certificate.classList.remove('Show')

})


var typed = new Typed('#element', {
    strings: ["Hello, my name is Palash Khandelwal. I am a passionate individual with a strong desire to learn and grow in the technical field. I believe that constant learning and staying updated with the latest developments in the field are essential for personal and professional growth. I am always eager to explore new technologies, expand my knowledge base, and apply my skills in practical scenarios."],
    typeSpeed: 10,
    smartBackspace: true,
    backDelay: 1000,
    loop:false,
    loopCount: Infinity
  });
  let Touch=document.getElementById('touch');
  setTimeout(() => {
    Touch.classList.add('btn')
  }, "7700");