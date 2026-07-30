## This is the Marketing Website for Open Eugene, a code for America Brigade

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

There are three ways to run this project:

1. Use the Available Scripts
2. Deploy the frontend to Cloudflare Workers (production) or use Docker for local validation
3. Use Kubernetes

Be sure to tear down each instance of the run before trying out a different one.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Cloudflare production deployment

Run `npm run cloudflare:check` to build and validate the static-assets Worker. Run
`npm run deploy:cloudflare` to publish it independently at `openeugene.austinrutledge.io`. The Docker
instructions below remain useful for local container validation and are not part of the DigitalOcean
backend stack. The Wrangler commands require Node.js 22 or newer; the isolated legacy Docker build
continues to use its tested Node.js 20 toolchain.

### `npm run eject`

- Don't do this

### Stop app

Stop the app using ctl+c.

## Run the App From Docker

### Build the production image

- Install Docker.
- Build the image with `docker build -t openeugene-marketing:local .`.

### Run the app

- Run the image with `docker run --rm -p 3000:80 openeugene-marketing:local`.
- Open a browser and go to `http://localhost:3000`.

The production image builds the legacy React application in a Node build stage and serves the
static output from a separate Nginx runtime image. Client-side routes fall back to `index.html`.

### Close down the app

Stop the app using ctl+c.

## Run the App From Kubernetes

### Install Kubernetes

- Look online to find how to install at least a single node k8s cluster.
- There are many ways to run k8s, including KinD, microk8s, and others.

### Install the namespaces, apply the k8s files

```bash
    $ kubectl create namespace openeugene-marketing-stage
    $ kubectl create namespace openeugene-marketing-prod
    $ kubectl apply -f ./kube
```

### Run the app

- Wait for the pod to be deployed. You can see if the pod is running with `kubectl get pods -n openeugene-marketing`
- See which IP address the app is running on with `kubectl get service -n openeugene-marketing`
- Open a browser and point to the IP address. It will automatically be using port 80, so no port need be specified.

### Shut down app

- `kubectl kubectl delete namespace openeugene-marketing-stage`
- `kubectl kubectl delete namespace openeugene-marketing-prod`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Updating page data

For the time being this app is using a local Db.ts file to store all the data for projects and contributors. This will be replaced with a database and an API Service layer soon.
But for the time being you will need to update the data in this file to update the data on the site.

All the data is stored in Objects within the Db.ts file that implement interfaces from the types.tsx file. These objects are then stuffed into an array and imported into the React components where they are needed.
Currently there are two types, Projects and Contributors. To add a new project or contributor to the site you just need to add an object of the appropriate type to the Db.ts file and add it to the appropriate array.
The order that the objects are added to the array dictate the order they will be rendered in. The current convention for the Db.ts folder is to list same objects together with the array being added under the last object of each type.

Images:
Currently all images are being stored in the /images directory. Add images to this directory and add a relative path to the data object for the image url. This will hopefully be replaced with a CDN soon.
