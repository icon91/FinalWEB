

$(document).ready(function () {

  $(".header-burger").click(function (event) {
    $(".header-burger, .header-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });



  $('#stick1 #click1').click(function () {
    $(this).next().slideToggle('slow');
    $("#d-arrow1").toggleClass('transform');
  })
  $('#stick2 #click2').click(function () {
    $(this).next().slideToggle('slow');
    $("#d-arrow2").toggleClass('transform');
  })
  $('#stick3 #click3').click(function () {
    $(this).next().slideToggle('slow');
    $("#d-arrow3").toggleClass('transform');
  })
  $('#stick4 #click4').click(function () {
    $(this).next().slideToggle('slow');
    $("#d-arrow4").toggleClass('transform');
  })
  $('#stick5 #click5').click(function () {
    $(this).next().slideToggle('slow');
    $("#d-arrow5").toggleClass('transform');
  })
  $('#stick6 #click6').click(function () {
    $(this).next().slideToggle('slow');
    $("#d-arrow6").toggleClass('transform');
  })

  $("#plan1 #planclick1").click(function () {
    $(this).next().slideToggle(1000);
    $("#planarr1").toggleClass('transform');
  });
  $("#plan2 #planclick2").click(function () {
    $(this).next().slideToggle(1000);
    $("#planarr2").toggleClass('transform');
  });
  $("#plan3 #planclick3").click(function () {
    $(this).next().slideToggle(1000);
    $("#planarr3").toggleClass('transform');
  });
  $("#plan4 #planclick4").click(function () {
    $(this).next().slideToggle(1000);
    $("#planarr4").toggleClass('transform');
  });







  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");
  var btn2 = document.getElementById("myBtn2");
  var btn3 = document.getElementById("myBtn3");



  var span = document.getElementsByClassName("close")[0];


  btn.onclick = function () {
    modal.style.display = "block";
  }
  btn2.onclick = function () {
    modal.style.display = "block";
  }
  btn3.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }


  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }










  function checkTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var hours = document.querySelector(".hours");
    var minutes = document.querySelector(".minutes");
    var seconds = document.querySelector(".seconds");

    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    hours.textContent = hr + " : ";
    minutes.textContent = min + " : ";
    seconds.textContent = sec + " Current Time";
  }

  setInterval(checkTime, 500);






});

const currentScroll = window.pageYOffset;
if (currentScroll > 0) {
  document.getElementsByClassName("header").style.backgroundColor = "white";
}







const form = document.getElementById('form');
const username = document.getElementById('username');
const cn = document.getElementById('cn');
const cvv = document.getElementById('cvv');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidcn = cn => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(cn).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const cnValue = cn.value.trim();
    const cvvValue = cvv.value.trim();
   

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(cnValue === '') {
        setError(cn, 'Card Number is required');
    } else if (!isValidcn(cnValue)) {
        setError(cn, 'Provide a valid Card Number');
    } else {
        setSuccess(cn);
    }

    if(cvvValue === '') {
        setError(cvv, 'CVV is required');
    } else if (cvvValue.length === 3 ) {
        setError(cvv, 'CVV must be at equal 3 character.')
    } else {
        setSuccess(cvv);
    }

  
};
