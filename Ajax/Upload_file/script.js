document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("upload-form").addEventListener("submit", function(event) {
      event.preventDefault();

      let fileInput = document.getElementById("file-input").files[0];
      if (!fileInput) {
          document.getElementById("message").innerText = "Please select a file!";
          return;
      }

      if (fileInput.type !== "text/plain") {
          document.getElementById("message").innerText = "Only .txt files are allowed!";
          return;
      }

      let reader = new FileReader();
      reader.onload = function(event) {
          document.getElementById("file-content").textContent = event.target.result;
          document.getElementById("file-preview").classList.remove("hidden");
          document.getElementById("message").innerHTML = "<p style='color: green;'>File loaded successfully!</p>";
      };

      reader.readAsText(fileInput);
  });
});
