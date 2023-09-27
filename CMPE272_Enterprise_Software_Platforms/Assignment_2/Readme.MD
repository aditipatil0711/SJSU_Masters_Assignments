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

Afther all the microservices are port forwarded, you can run the Flask UI and use the application.

# Demo
![](https://github.com/aditipatil0711/SJSU_Masters_Assignments/blob/59153840e6d3378963b72f8a29749678ba3ecec5/CMPE272_Enterprise_Software_Platforms/Assignment_2/media/FlaskBlog_Demo.mp4)

