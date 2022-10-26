from django.urls import path
from .views import api_list_serviceAppointment, api_show_serviceAppointment,  api_list_technician, api_show_technician, api_show_customers, api_list_customers, api_list_filter, api_show_filter

urlpatterns = [
    path("service/", api_list_serviceAppointment, name = "api_list_service"),
    path("service/<int:pk>/", api_show_serviceAppointment, name = "service_delete"),
    path("technicians/", api_list_technician, name= "api_create_technicians"),
    path("technicians/<int:pk>/", api_show_technician, name = "api_show_technicians"),
    path("customers/", api_list_customers, name = "api_create_customers"),
    path("customers/<int:pk>/", api_show_customers, name="api_show_customers"),
    path("pending/", api_list_filter, name = "api_list_filter"),
    path("pending/<int:pk>/", api_show_filter, name="api_show_filter")
]
