# Timestamp Microservice

This project is a simple API designed to help users convert between UNIX timestamps and human-readable dates. It provides endpoints that accept either a UNIX timestamp (in seconds) or a date in ISO format and returns both the UNIX timestamp and the date in a formatted string. The RESTful API is built using Node.js and Express, with Luxon for date and time manipulation.

#Important Features
 ##Endpoints:
 /api/:date? - Accepts an optional date parameter. The date can be either a UNIX timestamp in seconds or an ISO formatted date string.
