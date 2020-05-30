import DoublyLinkedList from './DoublyLinkedList';

const nodes = new DoublyLinkedList(1);
nodes.append(1);
nodes.append(4);
nodes.append(1);
nodes.append(1);
nodes.append(2);
nodes.append(1);
nodes.append(3);
nodes.prepend(1);
nodes.append(1);


nodes.remove(1);
nodes.showAll();