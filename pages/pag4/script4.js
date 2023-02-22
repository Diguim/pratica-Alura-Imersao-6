function adicionarFilme() {
    let filmeFavorito = document.getElementById('filme').value;//pega filme
    
    let elementoListaFilmes = document.getElementById('listaFilmes');//pega onde colocar filme
        
    document.getElementById('filme').value = '';
    
    
    if(filmeFavorito.endsWith('.jpg') || filmeFavorito.endsWith('.jpeg') || filmeFavorito.endsWith('.png')){
        elementoListaFilmes.innerHTML = '<img src='+ filmeFavorito + '>';
        console.log("ADICIONAR FILME NA LISTA");
    }else{
        console.log("LINK NÃO É DE IMAGEM");
        elementoListaFilmes.innerHTML = '<p>NÃO É LINK DE IMAGEM, TENTE NOVAMENTE</p>'
        return
    }
    //let listaFilmes = [ 'https://cinema10.com.br/upload/series/series_4_MV5BMTJhM2VhZDItMTk4OS00MTRjLTlmMDQtNzEyYmM0NDA0YjhjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX670_AL_.jpg','https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg','https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg']
    
    //SE CLICAR NO BANNER ABRIR VIDEO DO YOUTUBE
    
    //FAZER LISTA DE FILMES (TRAILERS)
  }