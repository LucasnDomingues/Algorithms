import SinglyLinkedList from './SinglyLinkedList';

console.log("Starting...");
const list = new SinglyLinkedList(1);

list.append(2);
list.append(1);
list.append(3);
list.prepend(1);
list.append(1);
list.append(1);

list.remove(1);
list.showAll();