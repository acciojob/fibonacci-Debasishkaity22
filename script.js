function fibonacci(num) {
// your code here
	if(num===0){
    return 0;
  }
  else if(num===1){
    return 0;
  }
  else if(num===2){
    return 1;
  }
  else{
    let fibo=[0,1];
    for(let i=2;i<num;i++){
      fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo[num-1];
  }
  
}

module.exports = fibonacci;
