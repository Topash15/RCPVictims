window.onload = function () {

  const btn = document.getElementById("contact-btn");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      btn.value="Sending..."

      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_ap4pzyp", "template_vqcpy53", this).then(
        function () {
          btn.value="Sent Successfully!"
          console.log("SUCCESS!");
        },
        function (error) {
          btn.value="Failed to Send. Please Try Again"
          console.log("FAILED...", error);
        }
      );
    });
};
