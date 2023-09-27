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


![image](https://github.com/aditipatil0711/SJSU_Masters_Assignments/assets/67693038/c063bec2-b3e2-4d26-8433-1bfe8fcb7511)



![image](https://github.com/aditipatil0711/SJSU_Masters_Assignments/assets/67693038/66add935-1a45-4c70-a571-30c66842cdba)


# Demo
https://github.com/aditipatil0711/SJSU_Masters_Assignments/assets/67693038/108619ce-9107-4e2b-86ca-5f518f4e4024

