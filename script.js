function addItem(e){
    e.preventDefault();
     console.log('Submit')
     var mail=document.getElementById('email').value;
     if(item.length>0){
         var row=document.createElement('tr')
     
         // add the content
          row.textContent= " You've successfully subscribed to our Projects We Love newsletter."
    


          table.appendChild(row)

      
          
 }
     }
    
form.addEventListener('submit', addItem)