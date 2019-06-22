function $(value) {
    return new fn(value);
}
function  fn(selector) {
    let firstChar = selector.charAt(0)
    let elem;
    if (firstChar == '.') {
        let classname = selector.substring('1')
        elem = document.getElementsByClassName(classname)
    } else {
        elem = document.getElementsByTagName(selector)
    }
    console.log(elem);
    for (let i = 0; i < elem.length; i++) {
        this[i] = elem[i]
    }
    this.length = elem.length;

}
    fn.prototype.each=function (callback){
        for(let i=0;i<this.length;i++){
            callback(i,this[i]);
        }
    }
    fn.prototype.html=function (value){
        this.each(function (index,elem) {
           elem.innerHTML=value;
        })
        return this;
    }

