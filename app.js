
      // Задание_1
      // const block = document.querySelector('.block_2')
      //
      // let positionX  = 0;
      // let positionY  = 0;
      //
      // const move = () => {
      //     if (positionX <= 446 && positionY === 0) {
      //         positionX +=16;
      //         block.style.left = `${positionX}px`;
      //         setTimeout(move, 25);
      //     } else if (positionX >= 440 && positionY <= 440) {
      //         positionY += 16;
      //         block.style.top = `${positionY}px`;
      //         setTimeout(move, 25);
      //     } else if (positionX > 0 && positionY > 0){
      //         positionX -=16;
      //         block.style.left = `${positionX}px`
      //         setTimeout(move, 25)
      //     }
      //     else if (positionX === 0 && positionY > 0){
      //         positionY -=16;
      //         block.style.top = `${positionY}px`
      //         setTimeout(move, 25)
      //     }
      // }
      // move()

      // задание_2

      function startTime (start){
          console.log(new Date());
          let stopInterval = setInterval( () => {
              start++
              if(start === 10){
                  clearInterval(stopInterval)
                    }
              console.log(start);
              },1000);
                }
                startTime(0)