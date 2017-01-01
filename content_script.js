(function(){

    var tr = document.getElementsByClassName("tr-xspj"),
    	tr_l = tr.length;

    for(var i = 0 ; i < tr_l - 1 ; i++){
        tr[i].querySelectorAll(".radio-pjf")[0].checked = true;
    }
    
    tr[tr_l - 2].querySelectorAll(".radio-pjf")[1].checked = true;

    alert("评课成功！")
})();