from django.shortcuts import render

# Create your views here.

def index(request):
    
    context = {}
    return render(request, 'alumnos/index.html')

def macetas(request):
    context = {}
    return render(request, 'alumnos/macetas.html', context)

def planta(request):
    context = {}
    return render(request, 'alumnos/planta.html', context)

def politicas(request):
    context = {}
    return render(request, 'alumnos/politicas.html', context)

def registro(request):
    context = {}
    return render(request, 'alumnos/registro.html', context)

def testimonios(request):
    context = {}
    return render(request, 'alumnos/testimonios.html', context)

def tierra(request):
    context = {}
    return render(request, 'alumnos/tierraa.html', context)


def contacto(request):
    context = {}
    return render(request, 'alumnos/contacto.html', context)



def carrito(request):
    context = {}
    return render(request, 'alumnos/carrito.html', context)