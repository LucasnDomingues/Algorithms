export default class Node{
    constructor(data){
        this.data = data
    }

    getData(){
        return this.data;
    }

    setNext(next){
        this.next = next;
    }

    getNext(){
        return this.next;
    }

    setPrevious(previous){
        this.previous = previous;
    }

    getPrevious(){
        return this.previous;
    }

    show(){
        console.log((this.getPrevious() ? this.getPrevious().getData() : 'none') + ' <- ' +
                                this.getData() + 
                                ' -> ' + (this.getNext()? this.getNext().getData() : 'none'));
    }
}