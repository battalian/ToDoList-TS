var id_counter;
id_counter = 0;
var ListsContainer = /** @class */ (function () {
    function ListsContainer() {
        this.tasksList = [];
    }
    ListsContainer.prototype.addList = function (curTask) {
        this.tasksList.push(curTask);
        id_counter++;
    };
    ListsContainer.prototype.updateList = function (id, title) {
        var _this = this;
        console.log('update');
        Object.keys(this.tasksList).forEach(function (key) {
            if (_this.tasksList[key].id === id) {
                _this.tasksList[key].title = title;
            }
        });
    };
    ListsContainer.prototype.deleteList = function (id) {
        var _this = this;
        var idToBeDeleted;
        Object.keys(this.tasksList).forEach(function (key) {
            if (_this.tasksList[key].id === id) {
                idToBeDeleted = key;
            }
        });
        console.log(idToBeDeleted);
        this.tasksList.splice(idToBeDeleted, 1);
    };
    ListsContainer.prototype.markAsComplete = function (id) {
        var _this = this;
        var idToBeCompleted;
        Object.keys(this.tasksList).forEach(function (key) {
            if (_this.tasksList[key].id === id) {
                _this.tasksList[key].status = true;
            }
        });
    };
    ListsContainer.prototype.display = function () {
        //console.log('display');
        console.log(this.tasksList);
        //console.log( this.tasksList.length );
    };
    ListsContainer.prototype.getTasks = function () {
        return this.tasksList;
    };
    return ListsContainer;
}());
var obj = new ListsContainer();
function addItem(title, status, id) {
    obj.addList({
        title: title,
        status: status,
        id: id_counter
    });
}
function deleteItem(id) {
    obj.deleteList(id);
}
function modifyItem(title, id) {
    obj.updateList(id, title);
}
function changeStatusToComplete(id) {
    obj.markAsComplete(id);
}
function display() {
    obj.display();
}
function getTasks() {
    return obj.getTasks();
}
// obj.addList( {title: 'sample' ,status: false, id: 1} );
// obj.display();
// obj.addList( {title: 'sample2' ,status: false, id: 2} );
// obj.updateList(1, "go bro");
// obj.updateList(2, "go for it bro");
// obj.deleteList(2);
//
// obj.addList( {title: 'sample3' ,status: false, id: 3} );
//
// obj.markAsComplete(3);
// obj.display(); 
