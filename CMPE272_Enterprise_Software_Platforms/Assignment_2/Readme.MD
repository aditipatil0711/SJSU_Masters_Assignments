# CRUD Microservices Architecture using Kubernetes
This assignment demonstrates how we can deploy microservices using kubernets.

# Getting started
Clone this repository.

For each of the CRUD folders, repeat the following commands in separate terminals:

```shell
cd <microservice_directory>
docker build -t <microservice-image-name> .
kubectl apply -f <respective.yml>
kubectl port-forward pod/<respective_pod_name> <port> 
```

After all the microservices are port forwarded, you can run the Flask UI and use the application.


# Demo
In the demo below, you can see the functionality of the application when the deployment is in the Microservices Architecture

https://github.com/aditipatil0711/SJSU_Masters_Assignments/assets/67693038/108619ce-9107-4e2b-86ca-5f518f4e4024

