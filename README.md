## Take Home Assessment

This assessment is to write a React application that utilise JSON Server as a mock backend and display list of job posts. The application should have the following features:

1. Follow the correct Figma design given
2. Display list of job posts
3. Call the mocked API to get the list of job posts

## Assumptions Made

1. All item objects follow the same schema (i.e: No missing attributes) as in the initial object of the data.json.
2. Duplications of companies in the same category are intentional. So did not merge them to a single company entry.
3. Some of the icons returns from the API (json-server) are not accessible and did not use a default image. Image url returns "NoSuchKey" error.
4. Kept the card height as fixed as per the design. So, content will be scrollable if it exceeds the height.
5. Only companies were sorted in ascending order. Did not sort industries.
6. Cards are in a grid format with responsive design. [Tested on iPhone 5SE/XR/14 Pro Max, iPad Air, iPad Pro, Desktop]
7. Did not remove companies with no job posts.
8. Font `Source Sans Pro` was added using a library because it was not available in the Google fonts.

## How to run the application

To run the application, follow the steps below:

1. Clone this repository and run `yarn install` to install the dependencies.

2. Open a new terminal and change the directory to the project root and run the following command to start the JSON Server:

```bash
npx json-server data.json
```

3. Open another terminal, change the directory to the project root and run the following command to start the React application:

```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173/` to view the application.

## Technical Specifications

- **Frontend Framework:** React (using TypeScript)
- **Development Server:** Vite
- **Styling:** Tailwind CSS
- **Mocked Backend:** JSON Server
- **API Calls:** Axios
- **Version Control:** Git
