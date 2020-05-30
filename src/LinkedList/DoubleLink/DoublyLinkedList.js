import Node from './Node';

export default class DoublyLinkedList{
    constructor(head){
        this.head = new Node(head);
    }

    setHead(head){
        this.head = head;
    }

    getHead(){
        return this.head;
    }

    showAll(){
        let currentNode = this.getHead();
        while(currentNode != null){
            currentNode.show();
            currentNode = currentNode.getNext();
        }
    }

    append(data){
        if(this.getHead() == null){
            this.setHead(new Node(data));
        }else{
            let currentNode = this.getHead();
            while(currentNode.getNext() != null){
                currentNode = currentNode.getNext();
            }

            currentNode.setNext(new Node(data));
            currentNode.getNext().setPrevious(currentNode);
        }
    }

    prepend(data){
        if(this.getHead() == null){
            this.setHead(new Npde(data));
        }else{
            let oldHead = this.getHead();
            this.setHead(new Node(data));
            this.getHead().setNext(oldHead);
            oldHead.setPrevious(this.getHead());
        }
    }

    remove(data){
        let current = this.getHead();
        while(current){
            if(current.getData() == data){
                if(current.getPrevious()){
                    current.getPrevious().setNext(current.getNext());
                }else{
                    this.setHead(current.getNext());         
                }
                if(current.getNext()){
                    current.getNext().setPrevious(current.getPrevious());
                }
            }
            current = current.getNext();
        }
    }
}