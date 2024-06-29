from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('', views.index, name='index'),  # Ruta para la URL raíz
    path('macetas/', views.macetas, name='macetas'),
    path('planta/', views.planta, name='planta'),
    path('politicas/', views.politicas, name='politicas'),
    path('registro/', views.registro, name='registro'),
    path('testimonios/', views.testimonios, name='testimonios'),
    path('tierra/', views.tierra, name='tierra'),
    path('contacto/', views.contacto, name='contacto'),
    path('carrito/',views.carrito, name='carrito')
   

]
