function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(nested,target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('li');
  for (let i=0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML)) + (parseInt(n)).toString();
  }
}

function deepestChild(element) {
  var nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length-1]
}

