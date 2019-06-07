function  fn(selector) {
    let firstChar=selector.charAt(0)
    let elem;
    if(firstChar=='.'){
        let classname=selector.substring('1')
        elem=document.getElementsByClassName(classname)
    }else{
        elem=document.getElementsByTagName(selector)
    }
    console.log(elem);
}