from django.contrib import admin
from .models import Technician, ServiceAppointment, Customer

@admin.register(Technician)
class Technician(admin.ModelAdmin):
    pass

@admin.register(ServiceAppointment)
class Service_appointment(admin.ModelAdmin):
    pass

@admin.register(Customer)
class Customer(admin.ModelAdmin):
    pass