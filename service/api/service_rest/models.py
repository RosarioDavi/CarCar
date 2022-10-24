from django.db import models
from inventory.api.inventory_rest.models import VehicleModel
from django.urls import reverse

class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    model = models.ForeignKey(
        VehicleModel,
        related_name="automobiles",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})

    

class CustomerVO(models.Model):
    name = models.CharField(max_length = 100)
    phone_number = models.PositiveIntegerField(max_length = 20)


class Technician(models.Model):
    name = models.CharField(max_length = 100 )
    employee_number= models.IntegerField()

class Service_appointment:
    VIN = models.ForeignKey(
        AutomobileVO,
        related_name = "VIN",
        on_delete = models.CASCADE,
        

    )
    customer_name = models.ForeignKey(
        CustomerVO,
        related_name = "Customer" ,
        on_delete = models.CASCADE,

        
    )
    appointment_date = models.DateField(auto_now_add = True)
    service_reason = models.CharField(max_length = 250 )
    assigned_technician = models.ForeignKey( 
        Technician,
        related_name = "technician",
        on_delete = models.CASCADE,
        
    )


