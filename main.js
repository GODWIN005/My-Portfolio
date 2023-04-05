
const skillBtn = document.getElementById("skill");
const certificateBtn = document.getElementById("certifications");
const educationBtn = document.getElementById("education");

const skillContent = document.querySelector(".skill-content");
const certificateContent = document.querySelector(".certificate-content");
const educationContent = document.querySelector(".education-content");


skillBtn.addEventListener("click", () => {
  
  skillContent.style.display = "block";
  certificateContent.style.display = "none";
  educationContent.style.display = "none";
 
  
});

certificateBtn.addEventListener("click", () => {
 
  certificateContent.style.display = "block";
  skillContent.style.display = "none";
  educationContent.style.display = "none";

 
});

educationBtn.addEventListener("click", (e) => {
 
  educationContent.style.display = "block";
  skillContent.style.display = "none";
  certificateContent.style.display = "none";

});


// menu bars close open

const menu = document.getElementById("menuBar");
const navbars = document.querySelector("#menu");



menu.addEventListener("click", () => {
  
  menu.classList.toggle('fa-times');
    navbars.classList.toggle('act');
})


// Email send to google sheet
 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwoqs7f4Vpu7DC5jWTUzlD6kPhokaOsWG2NGSH8vGjmAcCOQdpJNmLFODVU51bsOmsw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    
    
    setTimeout(() => {
      alert('your mail send successfully!')
      form.reset()
    }, 1000);

  } )












