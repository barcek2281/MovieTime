const API_URL = "https://api.thecatapi.com/v1/images/search";


const fetchButton = document.getElementById("fetch-cat");
const catImage = document.getElementById("cat-image");

async function fetchCat() {
  try {
    fetchButton.innerHTML = `
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Fetching...
        `;
        fetchButton.disabled = true;
    const response = await fetch(API_URL);
    const data = await response.json();
    
    catImage.src = data[0].url;
    catImage.style.display = "block";
  } 
  catch (error) {
    console.error("Error fetching cat image:", error);
    alert("Failed to load cat image. Please try again.");
  }
  finally{
    fetchButton.innerHTML = "Get a Cat";
    fetchButton.disabled = false;
  }
}

fetchButton.addEventListener("click", fetchCat);
