# Timestamp Microservice

This project is a simple API designed to help users convert between UNIX timestamps and human-readable dates. It provides endpoints that accept either a UNIX timestamp (in seconds) or a date in ISO format and returns both the UNIX timestamp and the date in a formatted string. The RESTful API is built using Node.js and Express, with Luxon for date and time manipulation.

## Part of FreeCodeCamp's Backend and API Course Development
Functionality Video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/YRU0xZiamsA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Example Responses

- **Input**: `/api/1609459200`
  - **Output**: `{ "unix": 1609459200, "utc": "Fri, 01 Jan 2021 00:00:00 GMT" }`
- **Input**: `/api/2024-06-06`
  - **Output**: `{ "unix": 1717718400000, "utc": "Thu, 06 Jun 2024 00:00:00 GMT" }`
- **Input**: `/api/`
  - **Output**: `{ "unix": <current_unix_timestamp>, "utc": "<current_utc_date>" }`

