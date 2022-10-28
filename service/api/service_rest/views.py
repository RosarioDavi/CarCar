from .models import AutomobileVO, ServiceAppointment, Customer, Technician
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
from .encoders import CustomerDetailEncoder, TechnicianDetailEncoder, ServiceAppointmentListEncoder, ServiceAppointmentDetailEncoder


@require_http_methods(["GET"])
def api_list_filter(request):
    services = ServiceAppointment.objects.filter(finished=False)
    return JsonResponse(
            {"services": services}, encoder = ServiceAppointmentListEncoder
        )

@require_http_methods(['PUT'])
def api_show_filter(request, pk):
    content = json.loads(request.body)
    ServiceAppointment.objects.filter(id=pk).update(**content)
    service= ServiceAppointment.objects.get(id=pk)
    return JsonResponse(
        service,
        encoder = ServiceAppointmentDetailEncoder,
        safe = False
    )

@require_http_methods(["GET", "POST"])
def api_list_serviceAppointment(request):
    if request.method == "GET":
        
        services = ServiceAppointment.objects.all()
        
            
        return JsonResponse(
            {"services": services}, encoder = ServiceAppointmentListEncoder
        )
    else:
        content = json.loads(request.body)

        try:
            auto_vin = content["automobile"]
            auto = AutomobileVO.objects.get(vin = auto_vin)
            content["automobile"] = auto
            
            customer = content["customer"]
            customer = Customer.objects.get(pk = customer)
            content["customer"] = customer

            employee_number = content["assigned_technician"]
            assigned_technician = Technician.objects.get(pk = employee_number)
            content["assigned_technician"] = assigned_technician
            
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
             {'message': "Invalid location id"},
                status=400
            )
        auto = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            auto,
            encoder=ServiceAppointmentDetailEncoder,
            safe = False
        )

@require_http_methods(["GET", "DELETE", "PUT" ])
def api_show_serviceAppointment(request, pk):
    if request.method == "GET":
        service = ServiceAppointment.objects.get(id=pk)
        return JsonResponse(
            service,
            encoder = ServiceAppointmentDetailEncoder,
            safe = False,
        )
    elif request.method == "DELETE":
        count, _ = ServiceAppointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        try:
            if "auto" in content:
                auto = AutomobileVO.objects.get(import_href=content["auto"])
                content["auto"] = auto 
        except AutomobileVO.DoesNotExist:
           return JsonResponse(
                {"message": "Invalid Location"},
                status=400
            )
        ServiceAppointment.objects.filter(id=pk).update(**content)
        service= ServiceAppointment.objects.get(id=pk)
        return JsonResponse(
            service,
            encoder = ServiceAppointmentDetailEncoder,
            safe = False
        )

@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder = CustomerDetailEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder = CustomerDetailEncoder,
            safe = False,
        )

@require_http_methods(["GET", "DELETE", "PUT" ])
def api_show_customers(request, pk):
    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder = CustomerDetailEncoder,
            safe=False
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
def api_list_technician(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder = TechnicianDetailEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Technician.objects.create(**content)
        return JsonResponse(
            customer,
            encoder = TechnicianDetailEncoder,
            safe = False,
        )

@require_http_methods(["GET", "DELETE", "PUT" ])
def api_show_technician(request, pk):
    if request.method == "GET":
        technicians = Technician.objects.get(id=pk)
        return JsonResponse(
            technicians,
            encoder = TechnicianDetailEncoder,
            safe=False
        )
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        Technician.objects.filter(id=pk).update(**content)
        customer = Technician.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )
