'use strict';

function collectSameElements(collectionA, collectionB) {
  var x=new Array();
  for(var i=0;i<collectionA.length;i++){
    if(collectionB.indexOf(collectionA[i])!== -1){
      x.push(collectionA[i]);
    }
  }
  var m=['a','e','f','d'];
  return x;
}
