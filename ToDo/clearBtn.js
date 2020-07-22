function clearBtn(){
    document.querySelector(".clear").addEventListener("click", function(){
        document.querySelector("ul").innerHTML = "";
    });
}
export {clearBtn};