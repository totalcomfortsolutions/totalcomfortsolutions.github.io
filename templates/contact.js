// Frank Poth 09/14/2017

(function() {

  var checkboxes, comment, contact, focusCheckfield, focusComment, focusTextfield, textfields;

  focusCheckbox = function(event) {

    var index;

    for (index = checkboxes.length - 1; index > -1; -- index) {

      if (checkboxes[index] != this) {

        checkboxes[index].checked = false;

      }

    }

  };

  focusComment = function(event) {

    switch(event.type) {

      case "focusin":

        if (this.innerHTML == this.default_text) {

          this.innerHTML = "";

        } break;

      case "focusout":

        if (this.innerHTML == "") {

          this.innerHTML = this.default_text;

        } break;

    }

  };

  focusTextfield = function(event) {

    switch(event.type) {

      case "focusin":

        if (this.value == this.default_text) {

          this.value = "";

        } break;

      case "focusout":

        if (this.value == "") {

          this.value = this.default_text;

        } break;

    }

  };


  contact = document.getElementById("contact");
  checkboxes = contact.getElementsByClassName("contact-checkbox");
  comment = contact.querySelector("#contact-comment");
  textfields = contact.getElementsByClassName("contact-textfield");

  for (index = textfields.length - 1; index > -1; -- index) {

    let textfield = textfields[index];

    textfield.addEventListener("focusin", focusTextfield);
    textfield.addEventListener("focusout", focusTextfield);
    textfield.default_text = textfield.value;

  }

  for (index = checkboxes.length - 1; index > -1; -- index) {

    checkboxes[index].addEventListener("focusin", focusCheckbox);

  }

  comment.default_text = comment.innerHTML;
  comment.addEventListener("focusin", focusComment);
  comment.addEventListener("focusout", focusComment);

})();
