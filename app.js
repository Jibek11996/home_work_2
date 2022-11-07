
    // const string = prompt('tel me your name');
    //
    // let regExp = /j/i;
    //
    // console.log(string.match(regExp));

    //*****************************************//

    // const letter = 'AaaBbbCccc';
    // let regExp = /a/gi;
    // console.log(letter.match(regExp));


    //*************************************************************//

    // const numbers = '1234567886858464534239';
    // const regExp = /\d/g;
    //
    // console.log(numbers.match(regExp));
    // console.log(numbers.replace(regExp, '*'));


    // *************************************************************//
    // const numbers = '12345hjjvj67886jkgj858464hjgj5342839';
    // const regExp = /\w/g;
    //
    // console.log(numbers.match(regExp));
    // console.log(numbers.replace(regExp, '*'));

    // *************************************************************//

     const phoneInput = document.querySelector('#phoneInput');
     const phoneCheck = document.querySelector('.phoneCheck');
     const phoneResult = document.querySelector('.phoneResult');

     const phoneRegExp =  /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

     phoneCheck.addEventListener('click', () =>{

          console.log(phoneInput.value);
          if (phoneRegExp.test(phoneInput.value)){
               phoneResult.innerText = 'Correct!';
               phoneResult.style.color = 'green';
          } else {
               phoneResult.innerText = 'Error!';
               phoneResult.style.color = 'red';
          }

         })

