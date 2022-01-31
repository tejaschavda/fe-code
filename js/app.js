$(document).ready(function () {

  $("#btn-search").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request
    email = $('#emailAddress').val().toLowerCase();

    let x;
    regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regEx)) {
      x = true;
    } else {
      x = false;
    }

    if (x === true) {
      // show loader
      $('#loader').show();
      
      $('#emailAddress').parent().removeClass('error');
      const proxyurl = "";
      const url =
        'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          $('#loader').hide();
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
        })
        .catch((e) => {
          console.log(e)
          $('#loader').hide();
        });
    } else if (x !== true) {
      
      $('#emailAddress').parent().addClass('error');
    }
  });

  $("#btn-phone").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request
    phoneNumber = $('#phoneNumber').val().toLowerCase();

    let x;
    regEx = /^\d{10}$/;
    if (phoneNumber.match(regEx)) {
      x = true;
    } else {
      x = false;
    }

    if (x === true) {
      // show loader
      $('#loader').show();
      
      $('#phoneNumber').parent().removeClass('error');
      const proxyurl = "";
      const url =
        'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phoneNumber;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          $('#loader').hide();
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
        })
        .catch((e) => {
          console.log(e)
          $('#loader').hide();
        });
    } else if (x !== true) {      
      $('#phoneNumber').parent().addClass('error');
    }
  });


  $('#emailAddress').keypress(function (event) {

    let x;
    
    let email = $('#emailAddress').val().toLowerCase();
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regEx)) {
      x = true;
      
      $('#emailAddress').parent().removeClass('error');
    } else {
      x = false;
    }
    const keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      /**
       * Makes a request to ltv API to search an specific email address.
       * If there's a response, it gets stored in the local storage and redirects to results page
       */
      event.preventDefault();
      localStorage.clear(); //Clears storage for next request     


      if (x === true) {
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        $('#emailAddress').parent().addClass('error');
      }
    }
  });


  $('#phoneNumber').keypress(function (event) {
    let x;
    let phoneNumber = $('#phoneNumber').val().toLowerCase();
    regEx = /^\d{10}$/;
    if (phoneNumber.match(regEx)) {
      x = true;
      
      $('#phoneNumber').parent().removeClass('error');
    } else {
      x = false;
    }
    keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      /**
       * Makes a request to ltv API to search an specific email address.
       * If there's a response, it gets stored in the local storage and redirects to results page
       */
      event.preventDefault();
      localStorage.clear(); //Clears storage for next request    


      if (x === true) {
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phoneNumber;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        
        $('#phoneNumber').parent().addClass('error');
      }
    }
  });

});
