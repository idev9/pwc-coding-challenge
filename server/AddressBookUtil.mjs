import fs from 'fs';

//Utility class used to provide functions around address book searching and filtering
export default class AddressBookUtil {
  constructor() {
    this.ADDRESS_DATA_FILE = './data.json'; //The file to save the address data to
  }

  //Returns the address book in ascending sorted order by name
  getListAsc(addressBook) {
    return addressBook.sort((a, b) => (a.name > b.name ? 1 : -1)) //Ascending
  }

  //Returns the address book in descending sorted order by name
  getListDec(addressBook) {
    return addressBook.sort((a, b) => (a.name < b.name ? 1 : -1)) //Decending
  }

  //Given two address books returns the names of the unique names. Assuming UID is unique across every unique person
  getUniqueFriends(addressBook1, addressBook2) {
    const addressBook1IDsOnly = addressBook1.map((obj) => obj.uid);
    const addressBook2IDsOnly = addressBook2.map((obj) => obj.uid);

    let unique1 = addressBook1IDsOnly.filter((o) => addressBook2IDsOnly.indexOf(o) === -1);
    let unique2 = addressBook2IDsOnly.filter((o) => addressBook1IDsOnly.indexOf(o) === -1);
    const uniqueUids = unique1.concat(unique2);

    const wholeAddressBook = new Map(addressBook1.concat(addressBook2).map(i => [i.uid, i.name]));
    const uniqueNames  = uniqueUids.map((uid) => wholeAddressBook.get(uid))

    return uniqueNames;
  }

  //Saves the data to a file
  saveAddressDataToDisk(latestAddressJson) {
    try {
      fs.writeFile(this.ADDRESS_DATA_FILE, JSON.stringify(latestAddressJson), (err) => {
        if (err) {
          console.log('There has been an error saving your address data.', err.message);
          return;
        }
        console.log('Address data saved successfully.')
      });
    } catch (err) {
      console.log('There has been an error parsing your saved JSON data.', err)
    }
  }

  //Reads the data from a saved file
  readSavedAddressData() {
    const savedAddressData = fs.readFileSync(this.ADDRESS_DATA_FILE);
    let savedAddressBooks = {};

    try {
      savedAddressBooks = JSON.parse(savedAddressData);

      return savedAddressBooks;
    } catch (err) {
      console.log('There has been an error parsing your saved JSON data.', err)
    }
  }
}
