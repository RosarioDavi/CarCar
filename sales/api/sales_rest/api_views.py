from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Customer, AutomobileVO, SalesPerson, SalesRecord
from .encoders import CustomerDetailEncoder,CustomerListEncoder,SalesPersonDetailEncoder,SalesRecordListEncoder, AutomobileVODetailEncoder, SalesRecordDetailEncoder

# Create your views here.
@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
        )

    else:
        content = json.loads(request.body)

        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_customers(request, pk):
    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
        
    else:
        content = json.loads(request.body)
        Customer.objects.filter(id=pk).update(**content)
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salespersons": salesperson},
            encoder=SalesPersonDetailEncoder,
        )

    else:
        content = json.loads(request.body)

        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_salesperson(request, pk):
    if request.method == "GET":
        salesperson = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = SalesPerson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
        
    else:
        content = json.loads(request.body)
        SalesPerson.objects.filter(id=pk).update(**content)
        salesperson = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_salesrecords(request, auto_vo_id=None):
    if request.method == "GET":
        if auto_vo_id is not None:
            sales = SalesRecord.objects.filter(auto=auto_vo_id)
        else:
            sales = SalesRecord.objects.all()
        return JsonResponse(
                {"salesrecords": sales},
                encoder=SalesRecordListEncoder
        )
    else:
        content = json.loads(request.body)

        try:
            auto_vin = content["automobile"]
            auto = AutomobileVO.objects.get(vin=auto_vin)
            content["automobile"] = auto
            employ_id = content["salesperson"]
            employee = SalesPerson.objects.get(employee_id=employ_id)
            content["salesperson"] = employee
            customer_num = content["customer"]
            customer = Customer.objects.get(phone_number=customer_num)
            content["customer"] = customer

        except AutomobileVO.DoesNotExist or SalesPerson.DoesNotExist or Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid does not exist"},
                status=400,
            )
        
        sales = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SalesRecordDetailEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_salesrecords(request, pk):
    if request.method == "GET":
        sales = SalesRecord.objects.get(id=pk)
        return JsonResponse(
            sales,
            encoder=SalesRecordDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = SalesRecord.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        try:
            auto_vin = content["automobile"]
            auto = AutomobileVO.objects.get(vin=auto_vin)
            content["automobile"] = auto
            employ_id = content["salesperson"]
            employee = SalesPerson.objects.get(employee_id=employ_id)
            content["salesperson"] = employee
            customer_num = content["customer"]
            customer = Customer.objects.get(phone_number=customer_num)
            content["customer"] = customer

        except AutomobileVO.DoesNotExist or SalesPerson.DoesNotExist or Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid does not exist"},
                status=400,
            )

        SalesRecord.objects.filter(id=pk).update(**content)
        sales = SalesRecord.objects.get(id=pk)
        return JsonResponse(
            sales,
            encoder=SalesRecordDetailEncoder,
            safe=False,
        )