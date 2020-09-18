class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(data){
        if(!this.head){
            this.head = new Node(data,this.head);
            this.tail = this.head;
            this.size ++;
            return;
        }
        this.head = new Node(data, this.head);
        this.size ++;
    }
    insertLast(data){
        let current = this.head

        if(!this.head){    // this.head가 아에 비어 있는 때는 생각하지 못함.
            this.head = new Node(data) 
            this.tail = this.head
            this.size ++;
            return;
        }
        while(current.next){
            current = current.next
        }
        this.tail = new Node(data);
        current.next = this.tail
        this.size ++;
    }
    insertAt(data, index){
        if(this.size <= index + 1 && index + 1 > 0){ // index로 음수를 넣을 경우 차단해줘야.
            this.insertLast(data)
            return;
        }
        let parent = this.head
        let child = this.head.next
        let newNode = new Node(data)
        for(let i = 1; i < index; i ++){
            parent = parent.next
            child = child.next
        }
        parent.next = newNode;
        newNode.next = child
        this.size ++;
    }
    getAt(index){
        if(index >= this.size){
            return undefined
        }
        let current = this.head;
        while(index > 0){
            index --;
            current = current.next
        }
        return current.data
    }
    remove(data){
        if(this.size === 1 && this.head.data === data){ // Unique
            this.head = null
            this.tail = null
            this.size --;
            return;
        }
        if(this.head.data === data){    // 첫번째에서 발견
            this.head = this.head.next;
            this.size --;
            return;
        }
        let parent = this.head;
        let current = parent.next
        let count = 2;
        while(count <= this.size-1){    // 중간에서 발견
            if(current.data === data){
                parent.next = current.next;
                this.size --;
                return;
            }
            parent = current
            current = current.next;
            count ++;
        }
        if(count === this.size){    // 마지막에서 발견
            this.tail = parent;
            parent.next = null;
            this.size --;
            return;
        }
        return undefined
    }
    removeAt(index){
        if(index === 0 && this.size === 1){   // Unique
            return this.remove(this.head.data)
        }
        else if(index === 0){          // 첫번째 발견 (tail이 없었다면, Unique와 함께 처리 가능)
            this.head = this.head.next
            this.size --;
            return;
        }else{    
            let current = this.head.next
            let parent = this.head
            let count = 1
            while(count < index){
                parent = current;
                current = current.next;
                count ++;
            }
            if(count === this.size-1){  // 마지막 발견
                this.tail = parent
                parent.next = null;
                this.size --;
                return;
            }else{                      // 중간 발견
                parent.next = current.next;
                this.size --;
            }
        }
        return undefined
    }
    removeAt2(index){
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let parent;
        let count = 0;
        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count++;
                parent = current;
                current = current.next;
            }
            parent.next = current.next;
        }
        this.size --;
    }
}

let linst = new LinkedList();
linst.insertFirst(1);
linst.insertLast(2);
linst.insertLast(3);
linst.insertAt(4,5);
linst.insertAt(2.5, 2);
console.log(linst)
linst.removeAt(1)
linst.removeAt(3)
linst.removeAt(2)
linst.removeAt(0)
linst.removeAt(0)
console.log(linst)

