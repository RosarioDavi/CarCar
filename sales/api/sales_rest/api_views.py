from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Customer, AutomobileVO, SalesPerson, SalesRecord

# Create your views here.
class CustomerDetailEncoder(ModelEncoder):
    model: Customer
    properties = ["name"]

class SalesPersonDetailEncoder(ModelEncoder):
    model: SalesPerson
    properties = ["name"]

class AutomobileVODetailEncoder(ModelEncoder):
    model: AutomobileVO
    properties = ["vin"]



