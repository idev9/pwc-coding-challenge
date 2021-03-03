export default class AddressBook {
  constructor(addressBook) {
    this.addressBook = addressBook;
  }

  getAddressBook() {
    return this.addressBook;
  }

  addNewAddress(newObj) {
    this.addressBook.push(newObj);
  }
}
