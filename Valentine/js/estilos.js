
function inicializar(){
	var icon_search;   
    var BtnCat;
	icon_search = document.getElementById('hamburger');
	icon_search.addEventListener('click', mostrar_buscador);
    BtnCat = document.getElementById('BtnCat');
    BtnCat.addEventListener('click', CatClick);
	
}

function CatClick(){
    var fasfa;
    var CatPrinci;
    fasfa = document.getElementById('fa-arrow-up');
    CatPrinci = document.getElementById('lista_de_categorias');
    CatPrinci.classList.toggle('show');
    fasfa.classList.toggle('show');
}

function mostrar_buscador(){
	
}


function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }

}





