const countdown = document.querySelector(".countdown");
document.querySelector(".countdown").style.color = "darkgreen";

let time = 10;

countdown.innerHTML = time--;
setTimeout(() => {
  countdown.innerHTML = time--;
  setTimeout(() => {
    countdown.innerHTML = time--;
    setTimeout(() => {
      countdown.innerHTML = time--;
      setTimeout(() => {
        countdown.innerHTML = time--;
        setTimeout(() => {
          countdown.innerHTML = time--;
          setTimeout(() => {
            countdown.innerHTML = time--;
            setTimeout(() => {
              countdown.innerHTML = time--;
              setTimeout(() => {
                countdown.innerHTML = time--;
                setTimeout(() => {
                  countdown.innerHTML = time--;
                  setTimeout(() => {
                    countdown.innerHTML = time--;
                    countdown.innerHTML = `Happy Independence Day`;
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
