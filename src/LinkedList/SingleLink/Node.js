export default class Node{
    constructor(data,next){
        this.data = data;
        this.next = next;
    }

    setNext(next){
        this.next=next;
    }

    getData(){
        return this.data;
    }

    getNext(){
        return this.next;
    }

    show(){
        console.log('Node [' + this.getData() + '] -> [' + (this.getNext()? this.getNext().getData(): 'none') + ']');
    }
    
}