import express from 'express';
import fs from 'fs';
import AddressBook from './AddressBook.mjs';
import AddressUtil from './AddressBookUtil.mjs';

const app = express();
app.use(express.json());

const AddressBookUtil = new AddressUtil();
const savedAddressBooks = AddressBookUtil.readSavedAddressData(); //Load persisted data from saved file
const AddressBook1 = new AddressBook(savedAddressBooks); //Init Address book object with saved data

app.listen(3000, () => {
  console.log('Server started - Listening on port 3000')
});

//Returns a list of friends in address book sorted in ascending order or descending order
app.get('/v1/addressbook', (req, res) => {
  const sortMethord = req.query.sort;

  if (sortMethord == 'ASC') {
    res.send(AddressBookUtil.getListAsc(AddressBook1.getAddressBook()))
  } else if (sortMethord == 'DEC') {
    res.send(AddressBookUtil.getListDec(AddressBook1.getAddressBook()))
  } else {
    res.sendStatus(400)
  }
});

//Checks a user's address book against another list provided, and returns the unique elements
app.post('/v1/addressbook/unique', (req, res) => {
  res.send(AddressBookUtil.getUniqueFriends(AddressBook1.getAddressBook(), req.body))
})

//Add a new contact to your address book
app.post('/v1/address', (req, res) => {
  AddressBook1.addNewAddress(req.body);
  AddressBookUtil.saveAddressDataToDisk(AddressBook1.getAddressBook());

  res.sendStatus(201)
})
