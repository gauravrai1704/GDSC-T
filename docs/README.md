# gdsctask
Project Overview:
This project contains a landing page for GDSC recruitments, styled using TailwindCSS. It also includes functionality for users to submit data via an input form, which is stored and displayed dynamically.
Features
1. Responsive web design using TailwindCSS.
2. An input form that allows users to submit data.
3. Backend system for storing and retrieving submissions.
4. Deployed and live for easy access.
Technologies Used
1. Frontend: HTML, CSS (TailwindCSS), JavaScript
2. Backend: Node.js (for handling form submissions)
3. Icons: Font Awesome
•	Deployment: Netlify
Folder Structure
4. gdsctask.html: The main landing page that includes instructions.
5. Documentation.html: A page detailing the project’s development.
6. Submissions.html: A page containing an input box and a display area for submissions.The logic is that whatever the user inputs gets stored in submissions.json and is retrieved via server.js.
7. styles.css: Custom CSS for styling (used alongside TailwindCSS).
Approach:
1.	Initial Setup: Created the basic HTML structure with the required sections by inspecting the provided task page and used TailwindCSS for styling.
2.	Form Creation: Implemented the form with responsive styles and ensured it worked across different screen sizes.
3.	Submission Handling: Added a backend system to handle and store user submissions.
4.	Displaying Submissions: Created a page to display all user submissions dynamically. Whatever the user inputs gets stored in submissions.json and is displayed by retrieving through server.js.
5.	Deployment: Deployed the project using Vercel and configured the project for easy access.
Methodologies:
1. Initial Setup
The project was initialized by creating the essential HTML structure using gdsctask.html. This file serves as the main page for the project. The following resources were added:
•	TailwindCSS for responsive and fast styling.
•	Font Awesome for icon usage.
•	JavaScript for functionality like toggling the navigation menu in mobile view.
2. Responsive Layout with TailwindCSS
•	The layout of the page was built using TailwindCSS utility classes.
•	The topnav section provides a responsive navigation bar that adjusts based on the screen size, with media queries handling the mobile-friendly collapsible menu.
•	Styling such as background colors, text colors, margins, and padding were handled by utility classes like bg-gray-100, text-gray-800, font-semibold, etc.
•	The page content was structured using a grid layout (grid grid-cols-1 md:grid-cols-2) for better alignment of instructions on larger screens.
3. Core Functionalities
•	Instructions Section: Implemented using an ordered list (ol) to guide candidates through the steps they need to take to complete the task, including enhancing the page’s design, adding an input box, setting up a submission system, and displaying the stored submissions.
•	Mobile Navigation: The JavaScript toggleNav() function toggles between showing and hiding the navigation links when viewed on mobile devices. This is handled by adding/removing a class to the navigation bar.
4. Input and Submission System
The task includes creating a system where users can input their submissions:
•	Input Box: Styled and added to the page, ensuring it was responsive across various screen sizes.
•	Submission Handling: A backend system (a server using Node.js) was set up to handle form submissions. The server would store the user input in a file system.
5. Displaying Submissions
•	After the input is submitted and saved, a system to retrieve and display the stored data was implemented.
•	This could be done via a simple HTML list or a more advanced admin-like interface, depending on the scope of the task. The important aspect is the ease of use and visibility of the stored submissions.

Challenges Faced
1.	Responsive Design: Ensuring the layout looked consistent across mobile, tablet, and desktop screens.
o	Solution: Used TailwindCSS utility classes for responsive breakpoints.
2.	Submission Storage: Handling submissions and storing them in the backend.
o	Solution: Used Node.js as the backend and connected it to a file system to store submissions.
Key Points
•	Tailwind CSS is a utility-first CSS framework designed for rapid UI development, providing a vast array of utility classes.
•	The document describes the integration of Tailwind CSS with a Node.js server to handle form submissions efficiently.
•	Users can submit their projects via a form that dynamically saves submissions to a JSON file on the server.
•	The server is equipped with endpoints to receive submissions and return previously submitted entries, significantly enhancing user interactivity.
•	Proper error handling and user feedback mechanisms are integrated into the submission process to improve user experience.


Installation and Setup
1. Clone the repository:
bash
Copy code
git clone https://github.com/gauravrai1704/gdsctask.git
cd gdsctask
2. Install dependencies:
For Node.js:
bash
Copy code
npm install
3. Running the project locally:
For the frontend part, simply open gdsctask.html in your browser.
For the backend server:
For Node.js:
bash
Copy code
npm start
The website will be running locally at http://localhost:3000
Deployment
This project is deployed and accessible at:
Live Project URL
The project was deployed using Vercel. 


