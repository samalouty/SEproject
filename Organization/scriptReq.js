const keywordsInput = document.getElementById('keywords');
const filterButton = document.getElementById('contact-submit');

function applyFilters() {
  const keywords = keywordsInput.value.toLowerCase();
  // search logic here
  const jobBoxes = document.querySelectorAll('.job-box');
  jobBoxes.forEach(jobBox => {
      const Name = jobBox.querySelector('.job-content').textContent.toLowerCase();
      const shouldDisplay = matchKeywords(keywords, Name);
      jobBox.style.display = shouldDisplay ? "" : "none";
  });
}

function matchKeywords(keywords, text) {
  return keywords === '' || text.includes(keywords);
}



filterButton.addEventListener('click', applyFilters);














const photobtns= document.querySelectorAll(".photobtn");
const photos= document.querySelectorAll(".photo");

  
for (let i = 0; i < photobtns.length; i++) {
  photobtns[i].addEventListener('change', (e)=>handleFileSelect(e,i));
}

// Function to handle file selection
function handleFileSelect(event,i) {
  const file = event.target.files[0]; // Get the selected file
  const reader = new FileReader();
  reader.onload = function(event) {
      // const imgHolder = document.querySelector('.img-holder.photo'); // Get the image holder element
      photos[i].src = event.target.result; // Update the image source with the selected file
  };

  // Read the selected file as a data URL
  reader.readAsDataURL(file);
}


const deleteButts = document.querySelectorAll(".delete-button");
const jobBox = document.querySelectorAll(".job-box");

for (let i = 0; i < deleteButts.length; i++) {
  deleteButts[i].addEventListener("click", (e) => {
    jobBox[i].remove();
  });
}


// View Donation 1
const viewDonation1 = document.getElementById("vdonation1"); //
const viewDonation1Screen = document.getElementById("vdonation1-screen");

viewDonation1.addEventListener("click", (e) => {
  viewDonation1Screen.style.visibility = "visible";
  viewDonation1Screen.style.display = "";
});

const CloseDonation1 = document.getElementsByClassName("close-donation")[0];

CloseDonation1.addEventListener("click", (e) => {
  viewDonation1Screen.style.display = "none";
  viewDonation1Screen.style.visibility = "hidden";
});

//View Donation 2

const viewDonation2 = document.getElementById("vdonation2"); //
const viewDonation2Screen = document.getElementById("vdonation2-screen");

viewDonation2.addEventListener("click", (e) => {
  viewDonation2Screen.style.visibility = "visible";
  viewDonation2Screen.style.display = "";
});

const CloseDonation2 = document.getElementsByClassName("close-donation")[1];

CloseDonation2.addEventListener("click", (e) => {
  viewDonation2Screen.style.display = "none";
  viewDonation2Screen.style.visibility = "hidden";
});

//View Donation 3

const viewDonation3 = document.getElementById("vdonation3"); //
const viewDonation3Screen = document.getElementById("vdonation3-screen");

viewDonation3.addEventListener("click", (e) => {
  viewDonation3Screen.style.visibility = "visible";
  viewDonation3Screen.style.display = "";
});

const CloseDonation3 = document.getElementsByClassName("close-donation")[2];

CloseDonation3.addEventListener("click", (e) => {
  viewDonation3Screen.style.display = "none";
  viewDonation3Screen.style.visibility = "hidden";
});

//View Donation 4

const viewDonation4 = document.getElementById("vdonation4"); //
const viewDonation4Screen = document.getElementById("vdonation4-screen");

viewDonation4.addEventListener("click", (e) => {
  viewDonation4Screen.style.visibility = "visible";
  viewDonation4Screen.style.display = "";
});

const CloseDonation4 = document.getElementsByClassName("close-donation")[3];

CloseDonation4.addEventListener("click", (e) => {
  viewDonation4Screen.style.display = "none";
  viewDonation4Screen.style.visibility = "hidden";
});

//View Donor 1

const viewDonor1 = document.getElementById("vdonor1"); //
const viewDonor1Screen = document.getElementById("vdonor1-screen");

viewDonor1.addEventListener("click", (e) => {
  viewDonor1Screen.style.visibility = "visible";
  viewDonor1Screen.style.display = "";
});

const CloseDonor1 = document.getElementsByClassName("close-donor")[0];

CloseDonor1.addEventListener("click", (e) => {
  viewDonor1Screen.style.display = "none";
  viewDonor1Screen.style.visibility = "hidden";
});