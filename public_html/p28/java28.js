i = 0;
var arrangement = [];
var result = 1;
function menu(){ 
  var star = parseInt(prompt("1. to settle \n\
2. search for element by sequential search method\n\
3. Apply bubble ordering method\n\
4. Apply bidirectional bubble ordering method\n\
5. Apply insertion ordering method\n\
6. Apply method of ordering by mixing\n\
7. Apply the ordering method by selection\n\
8. Print Arrangement.\n\
0. Quit the program"));
return star;
}


function to_settle(){
    var tamaño = parseInt(prompt('write the size of the arrangement'));
    for (i = 0; i < tamaño; i++) {
        arrangement[i] = Math.round(Math.random() * 100);
        console.log(arrangement[i]);
    }
return tamaño;   
};

function insertionSort(){
    var l;
  console.log ("elige el numero");
  for ( let i = 1; i < l; i++ ) {
    j = i;
    temp = arrangement[ i ];
    while ( j > 0 && arrangement[ j - 1 ] > temp ) {
      arrangement[ j ] = arrangement[ j - 1 ];
      j--;
    }
    arrangement[ j ] = temp;
    console.log(arrangement[i]);
  }

  return arrangement;
};

var result = menu();
switch (result) { 
        case 1:
            to_settle();
            break;
        case 2:
            insertionSort();
            break;
    }
    menu();
 