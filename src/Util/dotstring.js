const dotString = (str) => {
    if(typeof(str) !== "string"){
        return "";
    }
    if(str.length > 10){
        let a = str.substring(0, 4);
        let b = str.substring(str.length-3, str.length)
        return a + "..." + b;
    }
    return str;
}

export default dotString