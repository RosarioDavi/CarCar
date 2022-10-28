# CarCar

Team:

* Person 1 - Which microservice? Rosario - Services    
* Person 2 - Which microservice? John - Sales

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

Added a AutomobileVO, Customer, Technician and ServiceAppointment models. AutomobileVo was created to poll the data from a poller from the autobile model in the inventory microservice. We were tasked with creating a website that would manage the sales and services of a car company. I was tasked with handling the services. I created a List page for service appointments and a create page for Technicians and Services using JS React.

To start the project and view it in localhost. 
Start by getting docker container up and running. 
Run the following commands in terminal. 

docker volume create beta-data
docker-compose build
docker-compose up

Once containers are up and running along with the images and data, you can go to http://localhost:3000/home. This is the home page of our project that provides a navgation with links to create and list views for both sales and services. 


## Sales microservice

Explain your models and integration with the inventory
microservice, here.

Added a SalesRecord, AutomobileVO, Customer and SalesPerson Model. The automobileVO was created to poll data from the automobile model in the inventory microservice. Within the SalesRecord model, I used the AutomobileVO, Customer and SalesPerson model as Foreign Keys. My partner and I were tasked with creating an application that allows the end user to keep track of all things related to a car dealership. I was in charge of building out the tracking for car sales, customer records, salesperson records, dropdown navbars, mainpage and displaying the information for the inventory pages. The integration portion between the inventory and sales microservice was with the polling of the Automobile data and the tracking of whether an automobile was sold in the inventory microservice.




In order to start the application, run the lines: 

docker volume create beta-data
docker-compose build
docker-compose up

Once you have all the docker containers, images and volume set up, you can open up the url: http://localhost:3000/home.
From there, navigate through the navlinks to the one titled Inventory and create at least one manufacturer, followed by a vehicle model and finally an automobile to use within the sales microservice.
Then, create a customer and sales person in the dropdown within the navbar titled sales.
This will allow the user to then create a sales record which they can see within sales list.