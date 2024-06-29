"""
URL configuration for instituto project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from alumnos import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', include('alumnos.urls')),
    path('', views.index, name='index'),  # Ruta para la URL raíz
    path('macetas/', views.macetas, name='macetas'),
    path('planta/', views.planta, name='planta'),
    path('politicas/', views.politicas, name='politicas'),
    path('registro/', views.registro, name='registro'),
    path('testimonios/', views.testimonios, name='testimonios'),
    path('tierra/', views.tierra, name='tierra'),
    path('contacto/',views.contacto, name='contacto'),
    path('carrito/',views.carrito, name='carrito')

]
