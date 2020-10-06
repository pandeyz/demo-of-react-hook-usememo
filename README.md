# demo-of-react-hook-usememo
Demo of react hook useMemo on a large data array and a search function

To run this project follow these steps:

1. Create a new react project using "npx create-react-app my-app"

2. Once the new app is created download the "userposts.json" file and put it under "src" folder or where you want and adjust its import path in "App.js" file accordingly.

3. Replace the content of "App.js" file with the file given here and run the project using "npm start".

4. Once the server started and the list is rendered, open the console and search any text from the post list and click on Search button and check the console, now remove few characters and again click on Search and check the console. After first Search click, for all subsequent clicks all the 100 records are not used for filter purpose.
