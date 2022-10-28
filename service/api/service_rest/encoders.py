from .models import AutomobileVO, ServiceAppointment, Customer, Technician
from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        'vin',
        "sold"
    ]

class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ['name', 'phone_number', 'id']

class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = ['name', 'employee_number', 'id']

class ServiceAppointmentListEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "automobile",
        "customer",
        "id",
        "assigned_technician",
        "service_reason",
        "appointment_date",
        "time",
        "finished"
    ]
    encoders = {
        "customer" : CustomerDetailEncoder(),
        "automobile" : AutomobileVOEncoder(),
        "assigned_technician" : TechnicianDetailEncoder()
    
    }

class ServiceAppointmentDetailEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "automobile",
        "customer",
        "appointment_date",
        "assigned_technician",
        "service_reason",
        "time",
        "finished"
        
    ]

    encoders = {
        "customer" : CustomerDetailEncoder(),
        "automobile" : AutomobileVOEncoder(),
        "assigned_technician" : TechnicianDetailEncoder()
    
    }