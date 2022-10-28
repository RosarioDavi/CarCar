from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField(null=True)
    vin = models.CharField(max_length=17, unique=True)
    href = models.CharField(max_length = 200,unique=True, null=True)
    sold = models.BooleanField(default=False, null=True)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})

    

class Customer(models.Model):
    name = models.CharField(max_length = 100)
    phone_number = models.CharField(max_length= 20, unique=True)
    
    


class Technician(models.Model):
    name = models.CharField(max_length = 100 )
    employee_number= models.IntegerField(unique=True)

class ServiceAppointment(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name = "automobile",
        on_delete = models.CASCADE,
        null = True,
        blank = True

    )
    customer = models.ForeignKey(
        Customer,
        related_name = "customer" ,
        on_delete = models.CASCADE,
        null = True,
        blank = True,

        
    )

    finished = models.BooleanField(default = False )

    appointment_date = models.DateField(auto_now_add = True)

    service_reason = models.CharField(max_length = 250 )

    time = models.TimeField(null = True, auto_now=False, auto_now_add=False, )

    assigned_technician = models.ForeignKey( 
        Technician,
        related_name = "technician",
        on_delete = models.CASCADE,
        null = True,
        blank = True,
        
    )


