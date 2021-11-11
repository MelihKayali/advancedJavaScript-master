function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
  
  console.log(isPrime(13));


  const number1 = 220
  const number2 = 284

  let total1 = 0
  let total2 = 0

  const isFriend = (s1 , s2) => {
      for (let index = 0; index < s1; index++) {
          if(number1 % index ==0){
              total1 += index
          }
      }
      for (let index = 0; index < s2; index++) {
          if(number2 % index == 0){
              total2 += index
          }
      }
      return(total1 == s2 && total2 == s1)? "Arkadas Sayilar " : "Arkadas Değiliz"
  }
  console.log(isFriend(220 , 284))


  var number3=1
  for (var number3=1; number3<=1000; number3++)
  {
      var total3 = 0
      for (var i = 1 ; i < number3 ; i++) {
        if(number3 %i == 0)  
        total3 += i
      }
  
      if (total3 == number3) 
        console.log(number3 + " mükemmel bir sayidir")
      
  }

  var counter = 0
  for(var number4= 2; number4<=1000;number4++)
  {
    var control = 0
    for(var i = 2 ; i<number4;i++){
        if(number4 % i == 0){
            control = 1
            break;
        }
    }
    if(control==0){
        console.log(number4 + "\n")
    }
  }