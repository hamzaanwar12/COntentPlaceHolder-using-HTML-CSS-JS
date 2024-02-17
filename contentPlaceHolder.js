let headerImage = document.querySelector(".container img")
let writerImage = document.querySelector(".writer img")
let removerHeading = document.querySelector("h1.animated")

let p = document.getElementsByTagName("p")[0]
let title = document.getElementsByTagName("h3")[0]
let writerName = document.getElementsByTagName("h3")[1]
let writerInfo = document.querySelector("span");

console.log(writerName)
console.log(writerInfo)
console.log(headerImage);
console.log(writerImage);
console.log(removerHeading);


setTimeout(() => {
    title.textContent = "Lorem ipsum dolor sit"
    p.textContent   = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam accusamus qui       repellendus tenetur eos Lorem."
    
    headerImage.src = `pic4.jpg`;
    writerImage.src = `pic4.jpg`;
    writerName.textContent = "John Doe"
    writerInfo.textContent = "Writer Info<"
    removerHeading.style.display = "none";


}, 2500);









