# PWC Coding Challenge

Coding challenge that allows a user to query address book for contacts.

## Design Decisions

### Task
You have been asked to develop an address book that allows a user to store (between
successive runs of the program) the name and phone numbers of their friends, with the
following functionality:

- To be able to display the list of friends and their corresponding phone numbers sorted
by their name.
- Given another address book that may or may not contain the same friends, display the
list of friends that are unique to each address book (the union of all the relative
complements). For example given:
    - Book1 = { “Bob”, “Mary”, “Jane” }
    - Book2 = { “Mary”, “John”, “Jane” }
    - The friends that are unique to each address book are:
    - Book1 \ Book2 = { “Bob”, “John” }

### Assumptions
- A user may have friends with the same name
- A user's friend may change their name or phone number. So a unique identifier is needed.
- A user may want to list their address book in ascending or descending order
- A user's addressbook will not necessarily contain other users.
- A user's addressbook can be empty
- The application assumes the message format for requests are valid
- Each address book entry has three entries: uid, name, and phone
- The uid uniquely identifies a person and allows people with same name or even if they change their name or phone number in the future.
- Each uid generated is unique and collisions won't happen

### Scope
- The application will expose a suite of APIS:
    - GET /v1/addressbook?sort=<ASC|DEC> - get list of friends in ASC or DEC order depending on query param
    - POST /v1/addressbook/unique - check a user's friends against another list & returns the unique friends names
    - POST /v1/address - add a new contact to your address book
- The application will not implement any security or authentication.

### Descoped - in the interest of time
- Security
- Data / Input validation
- Containerisation
- CI/CD
- Cloud deploy
- UI
- etc

### Strategy
- Data will be persisted into a local file between runs.
- The data format will be JSON.

## Application
This solution will be implemented using nodejs

### Prerequisites

- Node v14.16.0 (& npm 6.14.11)

### Install

```sh
npm install
```

### Run API Server

```sh
npm start
```
