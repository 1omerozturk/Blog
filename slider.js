
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

    changeSlide();

    setInterval(changeSlide, 5000);
