function main(n) {
   
   var espacio,hashtag, pasos;

   for (var i = 0; i < n; i++){
       espacio = n - 1 - i;
       hashtag = i + 1;
       pasos = ' '.repeat(espacio) + '#'.repeat(hashtag);
       console.log(pasos);    
   }  
};
