var noti = document.querySelector('h1');
var select = document.querySelector('.select');

//start poplogin
document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
//stop poplogin

	
var addItemId = 0;
function addToCart(item){
    // for favourite count 
	var add = Number(noti.getAttribute('data-count') || 0);
	noti.setAttribute('data-count', add +1);
	noti.classList.add('zero');
	
    // for image 
	addItemId +=1;
    console.log(item.children);
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);

    // to store title 
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    console.log(title.innerText);

    // to create delete button 
    var delBtn = document.createElement('button');
   	delBtn.innerText='x';
	delBtn.setAttribute('onclick','del('+addItemId+')');
    	

    // to show 
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
    console.log('complete');

	// to display noti 
	if (cartItems) {
			noti.onclick = ()=>{
				select.classList.toggle('display');
				
		}	
	}

}

// delete button function 	
function del(item){

    // to decrease number 
    var add = Number(noti.getAttribute('data-count') || 0);
	noti.setAttribute('data-count', add -1);
	noti.classList.add('zero');
    
    // to remove 
    document.getElementById(item).remove();
}
	
	