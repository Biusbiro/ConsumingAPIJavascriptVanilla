function mountCustomerList(categories){
    for (var id in categories) {
      var li = document.createElement("li");
      var div = document.createElement("div");
      var h6 = document.createElement("h6");
      var small = document.createElement("small");
      var smallRank = document.createElement("small");
      var spam = document.createElement("spam");
      var i = document.createElement("i");
      var ii = document.createElement("i");
      var br = document.createElement("br");
      i.setAttribute("onclick","dataToInput('" + id + "');");
      ii.setAttribute("onclick","deleteCostumer('" + id + "');");
      var a = document.createElement("a");
      li.classList.add("list-group-item");
      li.classList.add("d-flex");
      li.classList.add("justify-content-between");
      li.classList.add("lh-condensed");
      list.appendChild(li);
      li.appendChild(div);
      li.appendChild(spam);
      div.appendChild(h6);
      div.appendChild(small);
      div.appendChild(br);
      div.appendChild(smallRank);
      spam.appendChild(i);
      spam.appendChild(ii);
      small.appendChild(a);
      spam.classList.add("text-muted");
      small.classList.add("text-muted");
      smallRank.classList.add("text-muted");
      i.classList.add("material-icons");
      ii.classList.add("material-icons");
      h6.textContent=categories[id].name;
      i.textContent="edit";
      ii.textContent="delete_forever";
    }
}
