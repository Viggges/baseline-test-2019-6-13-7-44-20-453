'use strict';

function collectSameElements(collectionA, objectB) {
  var x=new Array();
  for(var i in collectionA){
    if(objectB["value"].indexOf(collectionA[i]["key"])!== -1){
      x.push(collectionA[i]["key"]);
    }
  }
  return x;
}
