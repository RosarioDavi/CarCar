from django.contrib import admin
from .models import Customer, SalesPerson
# Register your models here.
@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass