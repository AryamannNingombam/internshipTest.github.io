
const colors = {
  BLACK  : '#000000',
  WHITE : '#B6B6B6',
  DARK : '#441921',
  GREEN : '#007a2b',
  LIGHT : '#c6ecd4'

}


document.getElementById('particle-js-area').style.height = `${window.innerHeight}px`;



function loadMode(mode){
    const pageToLoad = './json/particlejs-config(' + mode + ').json';
    localStorage.setItem('theme',mode);
    currentTheme = mode;
    document.body.style.backgroundColor = colors[mode];
   document.getElementById('secondary-stylesheet').href=`./css/indexStyles(${mode}).css`


    particlesJS.load('particles-js',pageToLoad,()=>{



    });

}
let currentTheme = localStorage.getItem('theme');
if (!currentTheme){
  currentTheme = 'BLACK';
}

loadMode(currentTheme)



document.getElementById("black-dot").addEventListener('click',(e)=>{
  loadMode('BLACK');


});

document.getElementById("white-dot").addEventListener('click',(e)=>{
  loadMode('WHITE');


});

document.getElementById("green-dot").addEventListener('click',(e)=>{
  loadMode('GREEN');


});




document.getElementById("light-dot").addEventListener('click',(e)=>{
    loadMode('LIGHT');


});


document.getElementById("red-dot").addEventListener('click',(e)=>{
    loadMode('DARK');

});



