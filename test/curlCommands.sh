#ASC List
curl --location --request GET 'http://localhost:3000/v1/addressbook/?sort=ASC' \
--data-raw ''

#DEC List
curl --location --request GET 'http://localhost:3000/v1/addressbook/?sort=DEC' \
--data-raw ''

#Unique of address books
curl --location --request POST 'http://localhost:3000/v1/addressbook/unique' \
--header 'Content-Type: application/json' \
--data-raw '[
  {"uid": 1,"name": "Mary", "phone": 0},
  {"uid": 3,"name": "John", "phone": 1},
  {"uid": 2,"name": "Jane", "phone": 2},
  {"uid": 4, "name": "Ash", "phone": 123}
]'

#Add new person to address book
curl --location --request POST 'http://localhost:3000/v1/address' \
--header 'Content-Type: application/json' \
--data-raw '{"uid": 44,"name": "Patrick", "phone": 99}'
