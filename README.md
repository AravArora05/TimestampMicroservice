# Timestamp Microservice
## Part of FreeCodeCamp's Backend and API Course Development

This project is a simple API designed to help users convert between UNIX timestamps and human-readable dates. It provides endpoints that accept either a UNIX timestamp (in seconds) or a date in ISO format and returns both the UNIX timestamp and the date in a formatted string. The RESTful API is built using Node.js and Express, with Luxon for date and time manipulation.


#### Watch the video underneath to expereince view the project's functionality
[![Watch the video](https://img.youtube.com/vi/YRU0xZiamsA/0.jpg)](https://www.youtube.com/watch?v=YRU0xZiamsA)



## Example Responses

- **Input**: `/api/1609459200`
  - **Output**: `{ "unix": 1609459200, "utc": "Fri, 01 Jan 2021 00:00:00 GMT" }`
- **Input**: `/api/2024-06-06`
  - **Output**: `{ "unix": 1717718400000, "utc": "Thu, 06 Jun 2024 00:00:00 GMT" }`
- **Input**: `/api/`
  - **Output**: `{ "unix": <current_unix_timestamp>, "utc": "<current_utc_date>" }`

## Post-Code Review Remarks
Looking back about this project now, I think that I did this in a much more complicated manner than most people attempt to do the test casees. You only realisticallty need the JS Date object and also a bit of knowledge about Regex. I do think learning about the Luxon library was personally helpful for me!
