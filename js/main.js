let btn = document.getElementById("btn");
let cls = document.getElementById("cls");

const matrix = [
					['1',' ','.',',','!'],
					['2','a','b','c'],
          ['3','d','e','f'],
          ['4','g','h','i'],
          ['5','j','k','l'],
          ['6','m','n','o'],
          ['7','p','q','r','s'],
          ['8','t','u','v'],
          ['9','w','x','y','z'],
          ['0','-','_','@','*','+']
];

function translate(){
	txt = document.getElementById("txt");
  cel = document.getElementById("cel");
  value = txt.value.normalize('NFD').toLowerCase();
  if(value){
  	if(isNaN(value)){
    	cel.value = textToNum(value);
    }else{
    	cel.value = numToText(value);
    }
  }else{
  	btn.value = '???';
    setTimeout(()=>{ btn.value = "Convert"; },1000);
  }
}

function textToNum(txt){
	let string = "";
  for(let i = 0; i < txt.length; i++){
    for(let x = 0; x < matrix.length; x++){
    	if(matrix[x].indexOf(txt[i]) != -1){
      	string += x+''+matrix[x].indexOf(txt[i])+'';
      }
    }
  }
	return string;
}

function numToText(num){
	if( num.length % 2)
  	return "invalid";
	let string = "";
	for(let i = 0; i < num.length; i+=2){
      const i1 = parseInt(num[i]);
      const i2 = parseInt(num[i+1]);
      const letter = matrix[i1][i2];
      if(!letter)
      	return "invalid";
      string += matrix[i1][i2];
  }
  return string;
}

btn.addEventListener("click",translate);

cls.addEventListener("click",()=>{
	txt.value = cel.value = null;
});

document.body.addEventListener("keypress",e=>{
	if(e.keyCode == 13){
  	translate();
  }
});
