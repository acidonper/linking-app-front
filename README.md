# Linking App Front

Linking App Front is a React project, written in Typescript, which provides a new way of meet people to the users though an amazing Web Interface. Regarding technologies involved, the following list offer an application overview:

-   NodeJS
-   React
-   Typescript
-   Axios
-   HTML & CSS

## React Router

Linking App Frontend has both a public side and private side. The public welcome page is exposed to everybody in order to get information about the application, register new users and login. On the other hand, Users are able to access Linking App full functionality on the private side after login.

In order to implement this access model, React provides a "react router" solution which provides a collection of navigational components that compose declaratively with the React application. The following table illustrates how React Routes are exposed in Linking App Front:

| Path          | Objective                                               |
| ------------- | ------------------------------------------------------- |
| /             | Redirect to /welcome                                    |
| /welcome      | Linking App Public Welcome Page                         |
| /home         | Linking App Private Welcome Page                        |
| /home/pick    | Linking App Selection of Candidates area                |
| /home/live    | Linking App Candidates information dashboard            |
| /home/chat    | Linking App Chat service                                |
| /home/profile | Linking App User's profile information management panel |
| /home/photos  | Linking App User's photos management service            |

## Authentication

Linking App Frontend public page provides a login form, through the "login" button, in order to implement a user authentication method. Below this process, a backend API call is performed to obtain a valid JSON Web Token which will be used during user's sessions.

Once a user is logged, the JSON Web Token is saved in browser memory storage in order to make it accessible during the user's session.

## Required Variables

A set of variables have to be defined in **.env** file in order to run the application properly. The following list includes these required variables:

| Variable                       | Objective                       | Example                    |
| ------------------------------ | ------------------------------- | -------------------------- |
| REACT_APP_LINKING_APP_BACK_URL | Linking App Backend service URL | http://localhost:5000      |
| REACT_APP_LINKING_APP_CHAT_URL | Linking App Chat service URL    | http://localhost:5002/tech |

## Design and Development

Linking App has been developed following a mix of rules located in a set of design patterns and development standards.

Domain-driven design (DDD) has determined the way for code organization trying to match the business domain and technical implementation. The following table illustrates the folders organization in this project:

| Folder             | Objective                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| src                | Linking App Front Typescript code root folder                                                    |
| src/domain         | Domain Objects or Functions which belong to Linking App Front business logic                     |
| src/infrastructure | Objects and Functions required in order to implement external systems integrations               |
| src/core           | Basic React components (buttons, inputs, etc)                                                    |
| src/ui             | Complex React components which define Linking App Front functional sections and use cases        |
| src/styles         | CSS general styles                                                                               |
| src/utils          | Functions designed to implement support general tasks                                            |
| src/routes         | React Router definition                                                                          |
| public             | Public content                                                                                   |
| .openshift         | Linking App Front deployment documentation and the respective procedure (Openshift - Kubernetes) |

On the other hand, Test-driven development (TDD) has been taken into account in order to guide the software development process. For this reason, each file should have the corresponding test file.

## Frontend Dependencies

As mentioned in Linking [App Documentation Repository](https://github.com/acidonper/linking-app-documentation.git), Linking App Front has multiple microservice interdependencies which have been resolved in order to provide full Frontend functionality. For this reason, it is important to check the following microservices are running:

-   [Back](https://github.com/acidonper/linking-app-back.git) -> _Linking App Back_ is a NodeJS project which provides an API in order to allow _Linking App Front_ users access to some Linking App information and implements the matching algorithm.
-   [Images](https://github.com/acidonper/linking-app-images.git) -> _Linking App Images_ is a NodeJS project which provides an API in order to allow _Linking App Front_ users manage their pictures and serves them though a web server.
-   [Chat](https://github.com/acidonper/linking-app-chat.git) -> _Linking App Chat_ is a NodeJS project which provides a Chat tool in order to allow _Linking App Front_ users a way of communication to each other.

## Available Scripts

In project root directory, it is possible to execute the following scripts:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Runs the test files, included below, in order to run the application test.

-   `*`.spec.js -> Unity Test

It is important to bear in mind that testing in this repository is implemented by Jest and testing-library.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## License

BSD

## Author Information

Asier Cidon
