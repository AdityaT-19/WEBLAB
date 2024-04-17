// Function to fetch directory listing using GitHub API
async function displayDirectoryListing() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/AdityaT-19/WEBLAB/contents/"
    );
    const data = await response.json();

    // Filter directories
    let directories = data.filter((item) => item.type === "dir");
    //remove .github folder
    directories = directories.filter((item) => item.name !== ".github");

    // Get reference to directory list container
    const directoryList = document.getElementById("directoryList");
    const ul = document.createElement("ul");
    directoryList.appendChild(ul);

    // Generate HTML for directory listing
    directories.forEach((directory) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = directory.name + "/index.html"; // Link to index.html in each directory
      link.textContent = directory.name;
      li.appendChild(link);
      ul.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching directory listing:", error);
  }
}

// Call the function when the page is loaded
window.onload = displayDirectoryListing;
