from django.shortcuts import render
from .models import Bread, Menu, Vegetable, Source
from django.http.response import HttpResponse
import json

def kiosk(request):
    return render(request, 'kiosk/kioskmain.html')

def getMenu(request):
    get = {}
    for e in Menu.objects.all():
        get[e.name] = e.img
    return HttpResponse(json.dumps(get), content_type='application/json')
  
def getBread(request):
    get = {}
    for e in Bread.objects.all():
        get[e.name] = e.img
    return HttpResponse(json.dumps(get), content_type='application/json')
  
def getVege(request):
    get = {}
    for e in Vegetable.objects.all():
        get[e.name] = e.img
    return HttpResponse(json.dumps(get), content_type='application/json')
  
def getSource(request):
    get = {}
    for e in Source.objects.all():
        get[e.name] = e.img
    return HttpResponse(json.dumps(get), content_type='application/json')
    