
const btn = document.getElementsByClassName('buttons')[0];
function Calculator() {

const allButtons = ['c','1','2','+','3','4','-','5','6','*','7','8','=','9','0','/','.'];

const displayVal = document.querySelector('input');

  allButtons.forEach((allbtn) =>{
      
    const btnContent = document.createElement('button');

    btnContent.textContent = allbtn;
     
    btnContent.addEventListener('click',function(e){
        
         const val = e.target.textContent;

         
         if(val == '=' ){
          displayVal.value = eval(displayVal.value)
         }
         else{
          displayVal.value+= val;
         }
         if(val == 'c'){
          displayVal.value=''
         }
    })
    btn.appendChild(btnContent)


  })
  
  
}
Calculator();

