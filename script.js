document.getElementById("calk").onclick = function(){
    var A = document.getElementsByName("A")[0].value;
    var B = document.getElementsByName("B")[0].value;
    var C = document.getElementsByName("C")[0].value;
    var D = B * B - 4 * A * C;
    var x1, x2, x;
    var result = document.getElementById("result");
    
    if (D > 0) {
        x1 = (-B + Math.pow(D, 1/2))/(2*A);
        x2 = (-B - Math.pow(D, 1/2))/(2*A);
        result.textContent = "x1: " + x1 + ";  x2: " + x2;
    } else if  (D == 0){
        x = -B / (2 * A);
        result.textContent = "x: " + x;
    }
    else if  (D < 0) result.innerText = "No roots here";
}