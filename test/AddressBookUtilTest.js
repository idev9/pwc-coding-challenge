import assert from 'assert';
import AddressUtil from '../server/AddressBookUtil.js';

describe('AddressBookUtil Test', () => {
  const addressBook = [
    {"uid": 1,"name": "Mary", "phone": 0},
    {"uid": 2,"name": "John", "phone": 1},
    {"uid": 3,"name": "Jane", "phone": 2},
    {"uid": 4, "name": "Ash", "phone": 123}
  ];
  const AddressBookUtil = new AddressUtil();

  it('should return empty address book for ascending order', () => {
    const actual = AddressBookUtil.getListAsc([]);
    const expected = []
    assert.deepEqual(actual, expected);
  });

  it('should return empty address book for descending order', () => {
    const actual = AddressBookUtil.getListDec([]);
    const expected = []
    assert.deepEqual(actual, expected);
  });

  it('should return address book in ascending order', () => {
    const actual = AddressBookUtil.getListAsc(addressBook);
    const actualNamesSorted = actual.map((o)=>o.name)
    const expected = ['Ash', 'Jane', 'John', 'Mary']
    assert.deepEqual(actualNamesSorted, expected);
  });

  it('should return address book in descending order', () => {
    const actual = AddressBookUtil.getListDec(addressBook);
    const actualNamesSorted = actual.map((o)=>o.name)
    const expected = [ 'Mary', 'John', 'Jane', 'Ash' ]
    assert.deepEqual(actualNamesSorted, expected);
  });

  it('should return the unique elements between two empty address books', () => {
    const addressBook1 = [];

    const addressBook2 = [];

    const actual = AddressBookUtil.getUniqueFriends(addressBook1, addressBook2);
    const expected = [ ]
    assert.deepEqual(actual, expected);
  });


  it('should return the unique elements between address books', () => {
    const addressBook1 = [
      {"uid": 1,"name": "Bob", "phone": 0},
      {"uid": 2,"name": "Mary", "phone": 1},
      {"uid": 3,"name": "Jane", "phone": 2}
    ];

    const addressBook2 = [
      {"uid": 2,"name": "Mary", "phone": 0},
      {"uid": 3,"name": "Jane", "phone": 2},
      {"uid": 4,"name": "John", "phone": 1}
    ];

    const actual = AddressBookUtil.getUniqueFriends(addressBook1, addressBook2);
    const expected = [ 'Bob', 'John' ]
    assert.deepEqual(actual, expected);
  });
});
