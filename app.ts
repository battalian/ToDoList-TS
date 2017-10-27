var id_counter: number;
id_counter = 0;

interface task{
    title: string,
    status: boolean,
    id: number
}

class ListsContainer {
    public tasksList: task[];

    constructor(){
        this.tasksList = [];
    }

    addList(curTask: task){
        this.tasksList.push( curTask);
        id_counter++;
    }

    updateList(id: number, title: string){
        console.log('update');
        Object.keys(this.tasksList).forEach(key => {
            if (this.tasksList[key].id === id) {
                this.tasksList[key].title = title;
            }
        })
    }

    deleteList(id: number){
        var idToBeDeleted;
        Object.keys(this.tasksList).forEach(key => {
            if (this.tasksList[key].id === id) {
                idToBeDeleted = key;
            }
        });
        console.log(idToBeDeleted);
        this.tasksList.splice(idToBeDeleted, 1);
    }

    markAsComplete(id: number){
        var idToBeCompleted;
        Object.keys(this.tasksList).forEach(key => {
            if (this.tasksList[key].id === id) {
                this.tasksList[key].status = true;
            }
        });
    }

    display(){
        //console.log('display');
        console.log( this.tasksList );
        //console.log( this.tasksList.length );
    }

    getTasks(){
        return this.tasksList;
    }

}

var obj = new ListsContainer();

function addItem(title: string, status: boolean, id:number) {
    obj.addList({
        title: title ,
        status: status,
        id: id_counter
    });
}

function deleteItem( id: number) {
    obj.deleteList(id);
}

function modifyItem(title:string, id:number) {
    obj.updateList(id, title);
}

function changeStatusToComplete(id:number){
    obj.markAsComplete(id);
}

function display(){
    obj.display();
}

function getTasks(){
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