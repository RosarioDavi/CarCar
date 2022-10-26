from django.db import models

# Create your models here.
class SalesPerson(models.Model):
    name = models.CharField(max_length=50)
    employee_id = models.PositiveSmallIntegerField(unique=True)


class Customer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=50)
    href = models.CharField(max_length=200, unique=True)

class SalesRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name ="automobile",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    salesperson = models.ForeignKey(
        SalesPerson,
        related_name ="salespersons",
        on_delete=models.CASCADE,
        null=True,
        blank=True        
    )
    customer = models.ForeignKey(
        Customer,
        related_name ="customers",
        on_delete=models.CASCADE,
        null=True,
        blank=True    
    )
    price = models.PositiveIntegerField()

    
