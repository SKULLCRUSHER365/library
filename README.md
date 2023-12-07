## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation : #clone the repository and install the dependencies

```bash
$ git clone <repository-url>
$ cd library-management-api
$ npm install
```

## Environment Configuration: Set up environment variables (if needed).

`.env` adjust configurations.

## Running the app

Start the server:

```bash
$ npm run start
```
The server will start at `http://localhost:3000` (or a different port if specified).

## Seeding the Database

The seeding will be auto matically done when the project start with 10 mock data.

## API Documentation

# Retrieve All Books

URL: `/library/getAllBooks`
Method: `GET`
Description: Retrieves a list of all books in the library.
**Response**:

   ```json
   [
     {
       "id": "12d00810-8571-416c-b91c-f583d0321712",
       "title": "Book Title",
       "author": "Author Name",
     },
     
   ]
   ```

## Add a New Book

URL: `/library/createBook`
Method: `POST`
**Request**:

   ```json
   {
     "title": "New Book Title",
     "author": "New Author",
   }
   ```

**Response**:

   ```json
   {
     "id": "12d00810-8571-416c-b91c-f583d0321712",
     "title": "New Book Title",
     "author": "New Author",
   }
   ```

## Update Book Details

- **URL**: `/library/update/{id}`
- **Method**: `PATCH`
**Request**:

   ```json
   {
     "title": "Updated Title",
     "author": "Updated Author",
   }
   ```

**Response**:

   ```json
   {
     "id": "12d00810-8571-416c-b91c-f583d0321712",
     "title": "Updated Title",
     "author": "Updated Author",
   }
   ```

```
