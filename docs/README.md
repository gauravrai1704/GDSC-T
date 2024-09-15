# gdsctask
Project Overview:<br>
This project contains a landing page for GDSC recruitments, styled using TailwindCSS. It also includes functionality for users to submit data via an input form, which is stored and displayed dynamically.<br>
Features:<br>
1. Responsive web design using TailwindCSS.
2. An input form that allows users to submit data.
3. Backend system for storing and retrieving submissions.
4. Deployed and live for easy access.<br>
Technologies Used:<br>
1. Frontend: HTML, CSS (TailwindCSS), JavaScript
2. Backend: Node.js (for handling form submissions)
3. Icons: Font Awesome
4. Deployment: Netlify<br>
Folder Structure:<br>
* gdsctask.html: The main landing page that includes instructions.<br>
* Documentation.html: A page detailing the project’s development.<br>
* Submissions.html: A page containing an input box and a display area for submissions.The logic is that whatever the user inputs gets stored in submissions.json and is retrieved via server.js.<br>
* styles.css: Custom CSS for styling (used alongside TailwindCSS).<br>
Approach:<br>
1.	Initial Setup: Created the basic HTML structure with the required sections by inspecting the provided task page and used TailwindCSS for styling.
2.	Form Creation: Implemented the form with responsive styles and ensured it worked across different screen sizes.
3.	Submission Handling: Added a backend system to handle and store user submissions.
4.	Displaying Submissions: Created a page to display all user submissions dynamically. Whatever the user inputs gets stored in submissions.json and is displayed by retrieving through server.js.
5.	Deployment: Deployed the project using Vercel and configured the project for easy access.<br>
Methodologies:<br>
1. Initial Setup
The project was initialized by creating the essential HTML structure using gdsctask.html. This file serves as the main page for the project. The following resources were added:
•	TailwindCSS for responsive and fast styling.<br>
•	Font Awesome for icon usage.<br>
•	JavaScript for functionality like toggling the navigation menu in mobile view.<br>
2. Responsive Layout with TailwindCSS<br>
•	The layout of the page was built using TailwindCSS utility classes.<br>
•	The topnav section provides a responsive navigation bar that adjusts based on the screen size, with media queries handling the mobile-friendly collapsible menu.<br>
•	Styling such as background colors, text colors, margins, and padding were handled by utility classes like bg-gray-100, text-gray-800, font-semibold, etc.<br>
•	The page content was structured using a grid layout (grid grid-cols-1 md:grid-cols-2) for better alignment of instructions on larger screens.<br>
3. Core Functionalities<br>
•	Instructions Section: Implemented using an ordered list (ol) to guide candidates through the steps they need to take to complete the task, including enhancing the page’s design, adding an input box, setting up a submission system, and displaying the stored submissions.<br>
•	Mobile Navigation: The JavaScript toggleNav() function toggles between showing and hiding the navigation links when viewed on mobile devices. This is handled by adding/removing a class to the navigation bar.<br>
4. Input and Submission System<br>
The task includes creating a system where users can input their submissions:<br>
•	Input Box: Styled and added to the page, ensuring it was responsive across various screen sizes.<br>
•	Submission Handling: A backend system (a server using Node.js) was set up to handle form submissions. The server would store the user input in a file system.<br>
5. Displaying Submissions<br>
•	After the input is submitted and saved, a system to retrieve and display the stored data was implemented.<br>
•	This could be done via a simple HTML list or a more advanced admin-like interface, depending on the scope of the task. The important aspect is the ease of use and visibility of the stored submissions.<br>

Challenges Faced<br>
1.	Responsive Design: Ensuring the layout looked consistent across mobile, tablet, and desktop screens.
o	Solution: Used TailwindCSS utility classes for responsive breakpoints.
2.	Submission Storage: Handling submissions and storing them in the backend.
o	Solution: Used Node.js as the backend and connected it to a file system to store submissions.
Key Points<br>
•	Tailwind CSS is a utility-first CSS framework designed for rapid UI development, providing a vast array of utility classes.<br>
•	The document describes the integration of Tailwind CSS with a Node.js server to handle form submissions efficiently.<br>
•	Users can submit their projects via a form that dynamically saves submissions to a JSON file on the server.<br>
•	The server is equipped with endpoints to receive submissions and return previously submitted entries, significantly enhancing user interactivity.<br>
•	Proper error handling and user feedback mechanisms are integrated into the submission process to improve user experience.<br><br>


Installation and Setup<br>
1. Clone the repository:<br>
bash<br>
Copy code<br>
git clone https://github.com/gauravrai1704/gdsctask.git<br>
cd gdsctask<br>
2. Install dependencies:<br>
For Node.js:<br>
bash<br>
Copy code<br>
npm install<br>
3. Running the project locally:<br>
For the frontend part, simply open gdsctask.html in your browser.<br>
For the backend server:<br>
For Node.js:<br>
bash<br>
Copy code<br>
npm start<br>
The website will be running locally at http://localhost:3000<br>
Deployment<br>
This project is deployed and accessible at:
Live Project URL
The project was deployed using Netlify. <br>


