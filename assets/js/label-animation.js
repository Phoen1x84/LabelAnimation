// add class to html
document.querySelector('html').classList.add('js');  

// smart wrapper querySelectorAll
var elSelect = function ( elem ) {
  return document.querySelectorAll( elem ); 
};

// smart wrapper for each
function forEachItem(selector, fn){
  var elements = elSelect(selector);
  for (var i = 0; i < elements.length; i++){ 
    fn(elements[i], i);
  }
}

forEachItem('.input-wrap', function(element, i){  
  var inputItem = element.querySelector('.input-wrap__field');
  var labelItem = element.getElementsByTagName('label');    
  element.appendChild(labelItem[0], inputItem[1]);
  
  if (inputItem){
    inputItem.addEventListener('blur', function(){
      if (inputItem.value !== ''){          
        inputItem.classList.add('valid');
      } else {
        inputItem.classList.remove('valid');
      }
    });
  }
});