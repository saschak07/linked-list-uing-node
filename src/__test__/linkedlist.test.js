const { test, expect } = require('@jest/globals')
const linkedList = require('../linkedlist/linkedList')

test('load blank linked list', () => {
    const testlinkedList = new linkedList()
    expect(testlinkedList.toString()).toBe('')
})

test('testing prepend', () => {
    const testlinkedList = new linkedList()
    testlinkedList.prepend(1)
    testlinkedList.prepend(2)
    testlinkedList.prepend(3)

    expect(testlinkedList.toString()).toBe('3,2,1')
})

test('testing append', () => {
    const testlinkedList = new linkedList()
    testlinkedList.prepend(1)
    testlinkedList.prepend(2)
    testlinkedList.prepend(3)
    testlinkedList.append(4)

    expect(testlinkedList.toString()).toBe('3,2,1,4')
})

test('testing findMiddle', () => {
    const testlinkedList = new linkedList()
    testlinkedList.prepend(1)
    testlinkedList.prepend(2)
    testlinkedList.prepend(3)
    testlinkedList.append(4)
    testlinkedList.append(5)

    expect(testlinkedList.findMiddle().toString()).toBe('1')
})