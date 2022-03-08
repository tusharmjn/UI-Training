// let a = [1,2,[3,4],5];
// console.log(a.flat(1));

function flat(array) {

    let arr =[];

      function flatten(array){

        for(i=0;i<array.length;i++){
            let element = array[i];

        if (Array.isArray(element)) {
            flatten(element);
      }
      else{
          arr.push(element);
      }
    }
  }
  flatten(array);
  return arr;
}
console.log(flat([1,2,[3,4],5]));

