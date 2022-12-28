# UI Schema Previewer
[Live Site](https://ui-schema-previewer.netlify.app/)
This is a simple React application that allows users to paste a UI schema on the left side and preview the rendered form on the right-hand side. The application has a single screen that is divided into two equal sections next to each other. The left section contains a JSON editor for pasting the UI schema, and the right section automatically renders the form based on the pasted UI schema.


## Installation

To install this application, you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

1. Clone or download this repository.
2. Navigate to the root directory of the project and run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.
4. The application will be available at `http://localhost:3000`.


## Usage

To use the UI schema previewer, follow these steps:

- Paste a UI schema into the JSON editor on the left side of the screen.
- The form will automatically be rendered on the right side of the screen based on the pasted UI schema.
- Make any necessary changes to the UI schema and the form will update automatically.


## Features

- Paste a UI schema and preview the rendered form
- Dynamic form rendering based on UI schema
- Responsive design for mobile devices


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
