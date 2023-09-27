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

# Deliverables:

1) A document outlining the architecture of the application (before and after):[Flask Blog Application Architecture.docx](https://github.com/aditipatil0711/SJSU_Masters_Assignments/files/12733797/Flask.Blog.Application.Architecture.docx)

2) Kubernetes yamls, github repo link to your codebase:

    a) [UI yml file ](https://github.com/aditipatil0711/SJSU_Masters_Assignments/blob/4b0c95b06473e801843d10acdaf30e1dba239bd8/CMPE272_Enterprise_Software_Platforms/Assignment_2/flask_blog_ui/ui.yml)

    b) [Create yml file](https://github.com/aditipatil0711/SJSU_Masters_Assignments/blob/4b0c95b06473e801843d10acdaf30e1dba239bd8/CMPE272_Enterprise_Software_Platforms/Assignment_2/flask_blog_create/create.yml)

    c) [Read yml file](https://github.com/aditipatil0711/SJSU_Masters_Assignments/blob/4b0c95b06473e801843d10acdaf30e1dba239bd8/CMPE272_Enterprise_Software_Platforms/Assignment_2/flask_blog_read/read.yml)

    d) [Update yml file](https://github.com/aditipatil0711/SJSU_Masters_Assignments/blob/4b0c95b06473e801843d10acdaf30e1dba239bd8/CMPE272_Enterprise_Software_Platforms/Assignment_2/flask_blog_update/update.yml)

    e) [Delete yml file](https://github.com/aditipatil0711/SJSU_Masters_Assignhttps://github.com/aditipatil0711/SJSU_Masters_Assignments/tree/379566b6163b2cd2d52f30377ac7ab30046ab723/CMPE272_Enterprise_Software_Platforms/Assignment_2/mediaments/blob/4b0c95b06473e801843d10acdaf30e1dba239bd8/CMPE272_Enterprise_Software_Platforms/Assignment_2/flask_blog_delete/delete.yml)

3) Screenshot of your k8s running state (pods/services), screenshots of your application: [Media Folder](https://github.com/aditipatil0711/SJSU_Masters_Assignments/tree/37881f44ecf194c67b1bea63b315bee0e20a2ae8/CMPE272_Enterprise_Software_Platforms/Assignment_2/media)
