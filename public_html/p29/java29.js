function Myfuction() {
    var menu = prompt ("1: add business object and code \n\ \n\
2: search for company elements\n\ \n\
0: exit ");
    return parseInt(menu);
}

function add_elements() {
    var name = prompt("name of element");
    var code = prompt("code of element");
    
    var data = {
        name,
        code
    };
//    var inventory = JSON.parse(localStorage.getItem("Inventory"));
//    if (!inventory) {
//        inventory = [data];
//    }else {
//        inventory.push(data);
//    }
//    localStorage.setItem("inventory", JSON.stringify(inventory));
//    vMenu();
}
