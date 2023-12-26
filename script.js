const About = document.getElementById('About')
const liAbout = document.getElementById('liAbout')

liAbout.addEventListener('click',()=>{
    console.log('pallu')
    About.classList.add('Show')
})
var typed = new Typed('#element', {
    strings: ["Hello, my name is Palash Khandelwal. I am a passionate individual with a strong desire to learn and grow in the technical field. I believe that constant learning and staying updated with the latest developments in the field are essential for personal and professional growth. I am always eager to explore new technologies, expand my knowledge base, and apply my skills in practical scenarios."],
    typeSpeed: 20,
    smartBackspace: true,
    backDelay: 1000,
    loop:false,
    loopCount: Infinity
  });
  let Touch=document.getElementById('touch');
  setTimeout(() => {
    Touch.classList.add('btn')
  }, "16000");