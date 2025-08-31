var fruits = ""
var kgs = 0
var totalamount = 0
function add_cart () {
    fruits=document.getElementById("dropdown").value 
    kgs=document.getElementById("entry_box").value 
    switch (fruits) {
        case "strawberry":
            totalamount=kgs*160
            break;
        case "apple":
            totalamount=kgs*200
            break;
        case "grapes":
            totalamount=kgs*170
            break;
        case "pomogranete":
            totalamount=kgs*220
            break;
        case "guava":
            totalamount=kgs*60
            break;
    
        default:
            break;
    }
    document.getElementById("text_bruh").innerHTML+=fruits+" - "+totalamount+"                                                                                                                   "   
}