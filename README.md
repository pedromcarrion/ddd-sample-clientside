#Sample of Hexagonal Architecture on clientside

Target: Create a sample that how i can use Hexagonal Architecture on client side JS

Description:

  A sample main class that controlls click action in a button, call a repository to obtain data from an API an render the result inside a div.

Folders:
  1. Entities: Domain entities with a logic of aplicattion
  2. Repositories: Class to do AJAX calls, the methods of this classes return a Promise object
  3. Services: Class to manage calls to the methods of repositories and agreggate data
  4. Ui: UI components of application, this classes do stuff with document, window and DOM elements 

Runing the sample:
  1. npm install
  2. npm run dev
  3. Go to http://localhost:1234
