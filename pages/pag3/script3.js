 
var listaFilmes = [ 'https://cinema10.com.br/upload/series/series_4_MV5BMTJhM2VhZDItMTk4OS00MTRjLTlmMDQtNzEyYmM0NDA0YjhjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX670_AL_.jpg','https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg','https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg'
]
for(let i = 0; i < listaFilmes.length; i++){
  document.write('<img src=' + listaFilmes[i] + '>')
}


