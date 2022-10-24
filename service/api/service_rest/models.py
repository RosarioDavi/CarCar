from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    href = models.CharField(max_length = 200,unique=True, null=True)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})

    

class CustomerVO(models.Model):
    name = models.CharField(max_length = 100)
    phone_number = models.PositiveIntegerField(unique=True)
    


class Technician(models.Model):
    name = models.CharField(max_length = 100 )
    employee_number= models.IntegerField(unique=True)

class ServiceAppointment(models.Model):
    VIN = models.ForeignKey(
        AutomobileVO,
        related_name = "VIN",
        on_delete = models.CASCADE,
        null = True,
        blank = True

    )
    customer_name = models.ForeignKey(
        CustomerVO,
        related_name = "Customer" ,
        on_delete = models.CASCADE,
        null = True,
        blank = True,

        
    )

    appointment_date = models.DateField(auto_now_add = True)

    service_reason = models.CharField(max_length = 250 )

    assigned_technician = models.ForeignKey( 
        Technician,
        related_name = "technician",
        on_delete = models.CASCADE,
        null = True,
        blank = True,
        
    )


