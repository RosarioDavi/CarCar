# CarCar

Team:

* Person 1 - Which microservice? Rosario    
* Person 2 - Which microservice? John

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

Added a SalesRecord, AutomobileVO, Customer and SalesPerson Model. The automobileVO was created to poll data from the automobile model in the inventory microservice. Within the SalesRecord model, I used the AutomobileVO, Customer and SalesPerson model as Foreign Keys. My partner and I were tasked with creating an application that allows the end user to keep track of all things related to a car dealership. I was in charge of building out the tracking for car sales, customer records, salesperson records, dropdown navbars, mainpage and displaying the information for the inventory pages. The integration portion between the inventory and sales microservice was with the polling of the Automobile data and the tracking of whether an automobile was sold in the inventory microservice.