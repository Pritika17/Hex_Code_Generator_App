function myColor(){
    var colorResult = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = colorResult;
    document.getElementById('box').value = colorResult;
}

document.getElementById('colorInput').addEventListener('input', myColor);