var close=document.getElementById("closeMarq");
function remMarq(){
    document.getElementById("floatZq").remove()
}
close.addEventListener("click",remMarq)
//<button class="border border-support-300  bg-white white radius100p block flex flex-column items-center justify-center" style="width: 40px; height: 40px;"><svg class="svg-icon__icon--thumbsup-outline icon-medium fill-support-500 transition-all transition-150 w100p" aria-hidden="false" aria-label="thumbsup"><use xlink:href="#icon--thumbsup-outline"></use></svg></button>





//   setTimeout(refreshData, 10000);

// $(document).ready(function(){
			// 	$('div#loading').removeAttr('id');
		// });
		// var preloader = document.getElementById("loading");
		// // window.addEventListener('load', function(){
		// // 	preloader.style.display = 'none';
		// // 	})

		// function myFunction(){
		// 	preloader.style.display = 'none';
		// };



var loader= document.querySelector(".loader")
var line=document.createElement("hr");
loader.appendChild(line)
var main = document.querySelector(".main")
function init(){
    setTimeout(() =>{
        loader.appendChild(line)
        loader.style.opacity=0;
        loader.style.display='none';

        main.style.display='block';
        main.style.opacity=1;
    },2000);
}
init();