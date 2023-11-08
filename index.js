function clearScreen(){
  document.getElementById('result').value =''
}

function solve(){
  const x = document.getElementById('result').value
  const y = eval(x);
  document.getElementById('result').value = y
  return y
}

function display(val){
  document.getElementById('result').value +=val
  return val
}

