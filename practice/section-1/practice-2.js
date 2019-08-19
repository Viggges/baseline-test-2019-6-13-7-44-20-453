'use strict';

function collectSameElements(collectionA, collectionB) {
  var m=collectionB[0];
  var x=new Array();
  for(var i=0;i<collectionA.length;i++){
    if(m.indexOf(collectionA[i])!== -1){
      x.push(collectionA[i]);
    }
  }
  return x;
}
