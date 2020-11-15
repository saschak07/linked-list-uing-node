const linkedListNode = require('./linkedListNode')

class LinkedList{
    constructor(){
        this.head = null
    }
    prepend(data){
        if(this.head==null){
            this.head = new linkedListNode(data)
            return
        }
        const newNode = new linkedListNode(data)
        newNode.next = this.head
        this.head = newNode
    
    }

    append(data){
        if(this.head==null){
            this.head = new linkedListNode(data)
            return
        }
        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = new linkedListNode(data)
    }

    findMiddle(){
        let slowNode = this.head
        let fastNode = this.head

        while(fastNode.next){
            slowNode = slowNode.next
            fastNode = fastNode.next.next
        }

        return slowNode
    }

    toArray(){
        const nodes = []
        let currentNode = this.head
        while(currentNode){
            nodes.push(currentNode.data)
            currentNode = currentNode.next
        }
        return nodes
    }
    toString(callback){
        return this.toArray().map(node => node.toString(callback)).toString()
    }


}

module.exports = LinkedList