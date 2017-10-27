window.onload = function(){

    console.log('script started');
    var taskInfo =  document.getElementById('listTitle');
    var submitButton = document.getElementById('submitButtonId');

    submitButton.onclick = function(){
        console.log('entered onclick');
        var title = taskInfo.value;
        taskInfo.value = '';
        addItem(title, false, 0);
        createListDiv('listsId');
    };

    deleteList = function (id) {
        deleteItem(id);
        createListDiv('listsId');
    };

    markAsCompleteList= function (id) {
        changeStatusToComplete(id);
        createListDiv('listsId');
    };

    modifyDb = function (id, titleId) {
        console.log('id '+id);
        console.log(titleId);
        modifyItem( titleId.value ,id);
        createListDiv('listsId');
    };


    createInputField= function ( id, oldTitle) {
        console.log(id);
        console.log(oldTitle);

        var child = document.getElementById('text' + id);
        var par = document.getElementById("divId" + id);
        if (child){
            par.removeChild(child);

            var newDiv = document.createElement('div');
            newDiv.setAttribute("id", 'innerDiv' + id);
            newDiv.setAttribute("class", 'innerDivs');


            var inp1 = document.createElement('input');
            inp1.setAttribute("type", "text");
            inp1.setAttribute("id", "editTitle" + id);
            inp1.setAttribute("value", oldTitle);
            inp1.setAttribute('class', 'inp1Class');

            var inp2 = document.createElement('button');
            inp2.setAttribute("type", "button");
            // inp2.setAttribute("value", "submit");
            var t4 = document.createTextNode("Submit");
            inp2.setAttribute("id", "editButton" + id);
            inp2.setAttribute("onclick", 'modifyDb(' + id    + ', editTitle' + id + ')');
            inp2.setAttribute('class', 'btn btn-primary btn-sm')

            inp2.appendChild(t4);
            newDiv.appendChild(inp1);
            newDiv.appendChild(inp2);

            par.prepend(newDiv);
            // par.childNodes.addAt(0, newDiv);
            // par.insertBefore(newDiv, );
        }
    };



    createListDiv = function(divId ){
        var lists = getTasks();
        console.log(lists);

        var mainDiv = document.getElementById(divId);
        mainDiv.innerHTML = null;
        lists.forEach(function(list) {


            var newDiv = document.createElement("div");
            var newDivId = "divId" + list.id;
            newDiv.setAttribute("id", newDivId);
            if (!list.status)
                newDiv.setAttribute("class", "yellowList");
            else
                newDiv.setAttribute("class", "greenList");


            // var line1 = document.createElement('hr');
            var line2 = document.createElement('hr');

            // var t = document.createTextNode( list.title);
            var para = document.createElement("p");
            para.setAttribute("id", 'text' + list.id);
            var t = document.createTextNode(list.title);
            para.appendChild(t);
            if (list.status)
                para.style.color = "green";


            var deleteButton = document.createElement("button");
            deleteButton.setAttribute("type", "button");
            // deleteButton.setAttribute("value", "Delete");
            var t3 = document.createTextNode("Delete");
            deleteButton.setAttribute("onclick", 'deleteList(' + list.id + ')');
            deleteButton.setAttribute('class', 'btn btn-danger btn-sm');

            // newDiv.appendChild(line1);
            deleteButton.appendChild(t3)
            newDiv.appendChild(para);

            if(!list.status){
                var modifyButton = document.createElement("button");
                modifyButton.setAttribute("type", "button");
                // modifyButton.setAttribute("value", "Modify");
                var t2 = document.createTextNode("Modify");
                var temp = list.title;
                modifyButton.setAttribute("onclick", `createInputField(` + list.id + `,'` + temp + `')`);
                modifyButton.setAttribute('class', 'btn btn-info btn-sm');

                modifyButton.appendChild(t2);
                newDiv.appendChild(modifyButton);
            }

            newDiv.appendChild(deleteButton);

            if(!list.status) {
                var markAsCompleteButton = document.createElement("button");
                markAsCompleteButton.setAttribute("type", "button");
                // markAsCompleteButton.setAttribute("value", "Mark as complete");
                var t1 = document.createTextNode("Mark as complete");
                markAsCompleteButton.setAttribute("onclick", 'markAsCompleteList(' + list.id + ')');
                markAsCompleteButton.setAttribute('class', "btn btn-success btn-sm");
            // class="btn btn-default"

                markAsCompleteButton.appendChild(t1);
                newDiv.appendChild(markAsCompleteButton);

            }

             newDiv.appendChild(line2);

            mainDiv.appendChild(newDiv);
        });
    };


};