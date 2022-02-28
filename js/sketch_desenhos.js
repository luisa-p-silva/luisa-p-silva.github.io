function desenhos_papel(){
    var x1 = document.getElementById("fotos_papel");
    
    if (x1.style.display == 'none'){
        x1.style.display = 'block';
    } else {
        x1.style.display = 'none';
    }
}

function desenhos_digitais(){
    var x2 = document.getElementById("dig");
    
    if (x2.style.display == 'none'){
        x2.style.display = 'block';
    } else {
        x2.style.display = 'none';
    }
}

function desenhos_caderno(){
    var x3 = document.getElementById("fotos_caderno");
    
    if (x3.style.display == 'none'){
        x3.style.display = 'block';
    } else {
        x3.style.display = 'none';
    }
}



//VIDEO

function comecar(){
    var x4 = document.getElementsByClassName("curtas_metragens")[0];
    
    if (x4.style.display == 'none'){
        x4.style.display = 'block';
    } else {
        x4.style.display = 'none';
    }
}




//PASSAR AS CURTAS


const btnNext=document.getElementById('btnNext');
const btnPrev=document.getElementById ('btnPrev');
const curta=document.getElementById('curtas');
const video=document.getElementById('curtaMetragem');
const texto=document.getElementById('txt_v');

let vid=[];
let txt=[];
let curtas=[];


curtas[0]='SOZINHO COM TODA A GENTE';
curtas[1]='ACCEPTANCE';
curtas[2]='ABELHITA';
curtas[3]='FRIENDS GO';
curtas[4]='TEMPUS'

vid[0]="https://www.youtube.com/embed/oKLz9tvqMI4";
vid[1]="https://www.youtube.com/embed/16ieMRGuf7U";
vid[2]="https://www.youtube.com/embed/j1XbumMy3qs";
vid[3]="https://www.youtube.com/embed/7nBtOVvwoNQ";
vid[4]="https://www.youtube.com/embed/eiARoSGSbbc";

txt[0]='"Sozinho com toda a gente" é um poema-visual realizado por Guscatvo Carneiro, Ivania Gomes, Leonor Rodrigues, Diana Santos, Daniel Sousa e Rodrigo Castro. Este projeto foi solitado na disciplina de Oficina de Produtos Multimedia que se juntou com Portugues para a entrepretação de poemas, trazendo-os á vida com imagens. - 2021 -';
txt[1]='Daniel Sousa é o realizador de Acceptance, curta de seleção, que procura sensibilizar as pessoas para a comunidade transsexual. Esta curta metragem foi realizada por: Diana Santos, Luisa Silva e Daniel Sousa. Foi em dezembro de 2021 que as gravações começaram e por isso, foi-nos impedida a finalização do trabalho devido á pandemia. - 2020 -';
txt[2]='No 11º ano, a camera de Gaia criou um projeto que apelava ao trabalho artesanal da cidade. Para tal, contrribuiram com o IAI onde se realizou um pequeno documéntário. Leonor Rodrigues, Diana Santos, Daniel Sousa e Diana Silva e eu trabalhámos na Artesã Sara que trabalha na arte no papel. - 2021 -';
txt[3]='Friends go baseia-se na hisória de Ivania, uma menina com doenças psicológicas. Cada uma delas é representada por uma personagem que irá ter dialgos com a Ivania mostrando assim a pressão constante. Esta curta metraem foi realizada por Ivania Gomes, Diana Santos, Daniel Sousano âmbito da disciplina de expressão corporal, durante a quarentena por isso tudo acontecer a partir de a tela de um computador. - 2021 - ';
txt[4]='Um projeto que foi para o concurso BeGreen. Tendo como tema a reciclagem, o video apresentado representa o quanto a passagem do tempo é insignificante para o plástico uma vez que demora imeneos anos a ser degradado. Assim sendo, eu e a Diana Santos e o Daniel Sousa tentamos apelar á reciclagem e ao consumo de plastico, sensibilizando o publico. - 2021 - ';



let x =0;

btnNext.addEventListener('click',next);
btnPrev.addEventListener('click',prev);

function next(){
    x+=1;
    if(x >4){
        x=0;
    }
    curta.innerHTML=curtas[x];
    video.src=vid[x];
    texto.innerHTML=txt[x];
}


function prev (){

    x-=1;
    if(x<0) {
        x=4;

    }
    curta.innerHTML=curtas[x];
    video.src=vid[x];
    texto.innerHTML=txt[x];
} 