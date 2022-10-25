from django.urls import path
from .api_views import api_list_customers, api_show_customers, api_list_salesperson, api_show_salesperson, api_list_salesrecords, api_show_salesrecords

urlpatterns = [
    path("customers/", api_list_customers, name="api_create_customers"),
    path("customers/<int:pk>/", api_show_customers, name="api_show_customers"),
    path("salespersons/", api_list_salesperson, name="api_create_salesperson"),
    path("salespersons/<int:pk>/", api_show_salesperson, name="api_show_salesperson"),
    path("salesrecords/", api_list_salesrecords, name="api_create_salesrecords"),
    path("salesrecords/<int:pk>/", api_show_salesrecords, name="api_show_salesrecords"),
]