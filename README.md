This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

There are three ways to run this project: 
1. Use the Available Scripts
2. Use Docker
3. Use Kubernetes

Be sure to tear down each instance of the run before trying out a different one.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Stop app

Stop the app using ctl+c.

## Run the App From Docker

### Install the image and container

- Install Docker
- Build the image with `docker build -t openeugene-marketing:0.1.1 .`

### Run the app
- Run the image with `docker run -p 3000:3000 openeugene-marketing:0.1.1`
- Open a browser and go to `localhost:3000`

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
- `kubectl -n openeugene-marketing-stage delete pods,service --all`
- `kubectl -n openeugene-marketing-prod delete pods,service --all`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
