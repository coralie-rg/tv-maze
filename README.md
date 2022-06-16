TV MAZE API ASSIGNMENT

Functionalities delivered:

- List of shows in the main section
- Detailed information about a show including show image, title, summary and language
- Search for a show from the list
- Add a show to your favorites

1. How do we build and run it?

   There is no need to build anything with this project. Simply open the html file in your browser and start searching for shows!

2. What tools did you use and why did you use them?

   I used Google, a lot And Visual Studio Code as code editor.

3. What were the main logical and architectural design choices you made and why
   did you make them?

   For the structure of the page, I decided to create three different sections. The first one being the header with the search bar. The second with the list of shows is the main focus. And the third is the section with favorite shows.

   In terms of main structure, I chose to use templates in html and then I called and added text to those dynamically in the Javascript using fetch API to get data about the shows from Tv Maze API.

4. Did you intentionally leave stuff out? In that case, what and why?

   I did not intentionally leave stuff out. In time, I would have wanted to look into adding the favorites into localstorage so we could still consult those later. With localstorag and another fetch function, I would have wanted to also add the upcoming episodes for the favorites shows.
