function solution(S) {
  // Implement your solution here
  let num=parseInt(S,2);
  let numberOfTrials=0;
  while(num===0){

      if(num%2===0){
          //number is even
          num=num/2

      }else {
          //number is odd
          num=num-1



      }
      numberOfTrials=numberOfTrials+1

  }
  return numberOfTrials

}
console.log(solution('011100'))