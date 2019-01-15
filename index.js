<<<<<<< HEAD
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(nested,target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('[attr$=ranked] li');
  
  for (let i=0; i<lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + (parseInt(n))).toString();
  }
}

function deepestChild(element) {
  var nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length-1]
=======
getFirstSelector(selector) {
  return document.querySelector(selector)
>>>>>>> a557bce3b4d73b9c668793fdfea4333d3e7d44fd
}

