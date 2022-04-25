class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T, next: LinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  toString(callbackFn?: (value: T) => string) {
    return callbackFn ? callbackFn(this.value) : `${this.value}`;
  }
}

export class LinkedList<T> {
  #head: LinkedListNode<T> | null;
  #tail: LinkedListNode<T> | null;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  // insert operations
  add(value: T) {
    const newNode = new LinkedListNode(value);

    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail!.next = newNode;
      this.#tail = newNode;
    }

    return this;
  }

  prepend(value: T) {
    let newNode = new LinkedListNode(value);
    newNode.next = this.#head;
    this.#head = newNode;

    if (!this.#tail) {
      this.#tail;
      this.#tail = newNode;
    }

    return this;
  }

  toArray() {
    const nodes = [];
    let currNode = this.#head;

    while (currNode) {
      nodes.push(currNode);
      currNode = currNode.next;
    }

    return nodes;
  }

  toString(callbackFn?: (value: T) => string) {
    return this.toArray()
      .map(node => node.toString(callbackFn))
      .toString();
  }

  display() {
    console.log(
      this.toArray()
        .map(node => node.value)
        .join(" => ")
    );
  }
}

// testing
const linkedList = new LinkedList<number>();
linkedList.add(2);
linkedList.add(4);
linkedList.add(1);
linkedList.add(9);
linkedList.add(7);
linkedList.prepend(30);
linkedList.prepend(3000);
linkedList.display();
