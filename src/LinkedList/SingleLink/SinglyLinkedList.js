import Node from './Node';

export default class SinglyLinkedList{
    constructor(head){
        this.head = new Node(head);
    }

    getHead(){
        return this.head;
    }

    setHead(head){
        this.head = head;
    }

    append(node){
        if(this.getHead() == null){
            this.setHead(new Node(node));
        }else{
            let current = this.getHead();
            while(current.getNext() != null){
                current = current.getNext();
            }
            current.setNext(new Node(node));
        }
    }

    prepend(newHead){
        if(this.getHead() == null){
            this.setHead(new Node(newHead));
        }else{
            const oldHead = this.getHead();
            this.setHead(new Node(newHead));
            this.getHead().setNext(oldHead);
        }
    }

    clear(){
        this.setHead(null);
    }

    remove(data){
        let current = this.getHead();
        let previous = null;
        while(current){
            if(current.getData() == data){
                if(previous){
                    previous.setNext(current.getNext());
                }else{
                    this.setHead(current.getNext());
                }
            }else{
                previous = current;
            }
            current = current.getNext();
        }
    }

    showAll(){
        let currentNode = this.getHead();
        while(currentNode != null){
            currentNode.show();
            currentNode = currentNode.getNext();
        }
    }

}