class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T, next: LinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  #head: LinkedListNode<T> | null;
  // #tail: LinkedListNode<T> | null;

  constructor() {
    this.#head = null;
    // this.#tail = null;
  }

  toString() {
    let temp = this.#head;
    let result = "HEAD";

    while (temp !== null) {
      result += ` => ${temp.value}`;
      temp = temp.next;
    }

    return result + " => NULL";
  }

  // insert operations
  add(value: T) {
    if (this.#head === null) {
      this.#head = new LinkedListNode(value);
    } else {
      let temp = this.#head;

      while (temp.next !== null) {
        temp = temp.next;
      }

      temp.next = new LinkedListNode(value);
    }

    return this;
  }

  prepend(value: T) {
    let temp = new LinkedListNode(value);
    temp.next = this.#head;
    this.#head = temp;

    return this;
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
console.log(linkedList.toString());
