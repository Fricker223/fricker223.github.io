function viewRawFile() {
    const fileUrl = document.getElementById("file-url").value;
  
    if (fileUrl) {
      fetch(fileUrl)
        .then(response => response.text())
        .then(data => {
          const rawContent = document.getElementById("raw-content");
          rawContent.textContent = data;
        })
        .catch(error => {
          console.log("Error:", error);
          const rawContent = document.getElementById("raw-content");
          rawContent.textContent = "Error fetching the file.";
        });
    }
  }
  