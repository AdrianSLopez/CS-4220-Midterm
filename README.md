
# Midterm Project
DUE: Sunday 03/26/23 - 11:59PM

#

Create a Command Line Application to demonstrate your understanding of JavaScript, Node.js by building a CLIs that interacts with an API.


The Command Line Application should interact with your teams selected API.  The API selected should support searching by keyword and getting detailed data for a specific item.
<ul>
    <li>The selected API should provide an endpoint which allows for searching by accepting a keyword/search term and returns a list of results associated to that keyword/search term.</li>
   <ul><li>This endpoint most provides a query parameter for searching</ul></li>
    <li>The selected API should provide an endpoint which allows for getting detailed data on a single item by some unique identifier.</li>
   <ul><li>This endpoint most likely has a path parameter which requires a unique id</ul></li>
</ul>
 
 

Build a Command Line Application which accept a user's input of a **keyword or search term** and this keyword or term should be used to perform a search using your selected API.  The app should then **display the search results** and **also allow a user to select from the search results list**. 

Your app should then go back to the API again and perform a get/fetch by some unique identifier to be able to **display more details about the item selected** and then those details **should be displayed on the console** for the user to view. 

The application should save all **keyword or search term** to a local JSON file and the result count for that **keyword or search term**.

#

## CLI Project Requirements

Create a Command Line Application similar to the examples in class.  The Command Line Application should have the following:

**package.json**
    <ul>
        <li>The CLI should have a package.json file that is properly filled out.</li>
        <li>It should include but not limited to (name, version, author, description, dependencies, etc)</li>
    </ul>

 
**cli.js**
    <ul>
        <li>Should contain the logic to handle the user interactions via the command line</li>
        <li>The CLI app should display a help menu by typing: `node cli.js --help`</li>
        <li>The CLI should accept user input that is a keyword (associated to the you API selected)</li>
        <li>The CLI should include a `search` command similar to one of these:</li>
            <ul><li>`node cli.js search --<flag name> <keyword>`</ul></li>
            <ul><li>`node cli.js search <keyword>`</ul></li>


**api.js**
    <ul>
        <li>This file **_must_** export a function that allows for searching the selected API by keyword.</li>
            <ul><li>Given a search keyword or search term this function should **return an array that represents the result list** which is related to the search term.</li></ul>
        <li>This file **_must_** export a function for getting details from the selected API by some unique identifier (id).</li>
            <ul><li>Given an id or some unique identifier, this function should **return detailed data about that one item.**</li></ul>
    </ul>


**app.js**
    <ul>
        <li>Should contain the logic for the application.</li>
        <li>The app should perform a search using the keyword/search term passed in from the command line.</li>
            <ul><li>This invoke the function that allows for searching in `api.js`</li></ul>
        <li>The app should display the search results list to the user.</li>
        <li>The app should prompt the user and allow the user to select one item from search results list (not type an input).</li>
        <li>The app should process the user's selection and get detailed data for the one item selected by using a unique identifier.</li>
            <ul><li>This invoke the function that allows for getting by unique identifer in `api.js`</li></ul>
        <li>The app should save the search history in a JSON file (</li>
            <ul><li>This invoke the function that allows for saving to a local file in `hisotry.js`</li></ul>
            <ul><li>Refer to `history.js` for additional details</li></ul>
        <li>The app should display the details in a clean and easy to read format.</li>
            <ul><li>The app should not print JavaScript object literals or JSON blobs.</li></ul>
    </ul>

 
**history.js**
    <ul>
        <li>This file must export a function that allows for saving all previous searches and the count of the results</li>
        <li>This performs the save by writing/updating a JSON file locally</li>
        <li>The saved dated should be in the form of an array of objects - where each object has the key search and the key resultCount</li>
        <li>HINT: https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback </li>
    </ul>
