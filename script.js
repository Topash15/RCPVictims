window.onload = function () {

  const btn = document.getElementById("contact-btn");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      btn.value="Sending..."

      emailjs.sendForm("service_ap4pzyp", "template_vqcpy53", this).then(
        function () {
          btn.value="Sent Successfully!"
          btn.disabled=true;
          console.log("SUCCESS!");
        },
        function (error) {
          btn.value="Failed to Send. Please Try Again"
          console.log("FAILED...", error);
        }
      );
    });
};
