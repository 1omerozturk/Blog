
const slides=[
    {
        "img":"./images/slide/first.png",
        "title": "",
        "description": ""
      },
    {
        "img":"./images/slide/blog.png",
        "title": "Blog",
        "description": "This is my Blog Website"
      },
    {
        "img":"./images/slide/react.png",
        "title": "React App",
        "description": "This is First React App for Market"
      },
    {
        "img":"./images/slide/ip.png",
        "title": "Ip and Port Scanner App",
        "description": "This is my ip and port scanning app with use Python"
      },
    {
        "img":"./images/slide/redux.png",
        "title": "React - Redux App",
        "description": "This is React-Redux app for Web3 and Blokchain"
      }

];

const certifs=[
    {
        "img":"./images/certifics/cisco.jpeg",
        "title": "Cisco Cyber Security Intro",
        "description": ""
      },
    {
        "img":"./images/certifics/solopy1.jpeg",
        "title": "Sololearn Python Intro",
        "description": "This is my Python certf."
      },
   
      
    {
        "img":"./images/certifics/globpy1.jpeg",
        "title": "Global AI HUB Python Bootcamp",
        "description": "This is my Python Bootcamp certf."
      },

    {
        "img":"./images/certifics/gitgithub.jpeg",
        "title": "BTK Academy Git and Github",
        "description": "This is my Git and Github certf."
      },
    {
        "img":"./images/certifics/solopy2.jpeg",
        "title": "Python Data Structures",
        "description": "This is my Python Data Structures certf."
      }

];

let count=0;
function changeCertifices(){
  const slide=certifs[count];
  const img=document.querySelector(".card2 img");
  const title = document.querySelector('.content2 h2');
  const content = document.querySelector('.content2 p');
  img.src=slide.img;
  title.textContent=slide.title;
  content.textContent=slide.description;
  count=(count+1)%certifs.length;
}

let index=0;
function changeSlide(){
    const slide=slides[index];
    const img=document.querySelector(".card img");
    const title = document.querySelector('.content h2');
    const content = document.querySelector('.content p');
    img.src=slide.img;
    title.textContent=slide.title;
    content.textContent=slide.description;
    
    index=(index+1)%slides.length;

}
    changeCertifices();
    changeSlide();
    setInterval(changeCertifices,5000);
    setInterval(changeSlide, 5000);
