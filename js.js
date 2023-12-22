let menu =["rau xao", "thit luoc", "ga ran"]
localStorage.setItem("menu", JSON.stringify(menu))



let n = prompt("Nhap ky tu")

if(n == "c"){
    let a = prompt('Mời người dùng nhập món ăn muốn thêm vào menu')
    alert(a)
    localStorage.setItem("a", JSON.stringify(a))

}else if(n == "r"){
    let b = menu.join()
    alert(b)
    
}else if(n == "u"){
    let c = prompt("Mời người dùng nhập vào tên món muốn update");
    let e = menu.indexOf(c)
    if (e>=0){
        let d = prompt("Mời người dùng nhập vào tên món ăn mới");
        alert(d)
        menu.splice(e-1, 1, d)
    }
    
    

}else if(n == "d"){
    let f = prompt("Mời người dùng nhập vào tên món muốn Delete")
    let key = menu.key
    
}













