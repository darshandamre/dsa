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
  append(value: T) {
    const newNode = new LinkedListNode(value);

    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail!.next = newNode;
      this.#tail = newNode;
    }
  }

  prepend(value: T) {
    let newNode = new LinkedListNode(value);
    newNode.next = this.#head;
    this.#head = newNode;

    if (!this.#tail) {
      this.#tail = newNode;
    }
  }

  insert(value: T, rawIndex: number) {
    const index = rawIndex < 0 ? 0 : rawIndex;

    if (index === 0 || !this.#head) {
      this.prepend(value);
      return;
    }

    let currNode = this.#head;

    for (let i = 1; currNode.next && i < index; i++) {
      currNode = currNode.next;
    }

    const newNode = new LinkedListNode(value);
    newNode.next = currNode.next;
    currNode.next = newNode;
    if (!newNode.next) {
      this.#tail = newNode;
    }
  }

  // delete operations
  deleteHead() {
    if (!this.#head) {
      return null;
    }

    const deletedHead = this.#head;
    this.#head = this.#head.next;
    if (!this.#head) {
      this.#tail = null;
    }
    return deletedHead.value;
  }

  deleteTail() {
    const deletedTail = this.#tail;
    if (this.#head === this.#tail) {
      return this.deleteHead();
    }

    let currNode = this.#head!;
    while (currNode.next?.next) {
      currNode = currNode.next;
    }
    this.#tail = currNode;
    currNode.next = null;

    return deletedTail!.value;
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
linkedList.append(2); // 2
linkedList.append(4); // 2 => 4
linkedList.prepend(30); // 30 => 2 => 4
linkedList.insert(0, 1); // 30 => 0 => 2 => 4
linkedList.insert(99, -3); // 99 => 30 => 0 => 2 => 4
linkedList.insert(11, 100); // 99 => 30 => 0 => 2 => 4 => 11
linkedList.deleteHead(); // 30 => 0 => 2 => 4 => 11
linkedList.deleteTail(); // 30 => 0 => 2 => 4
linkedList.display();
