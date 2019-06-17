from django.shortcuts import render
from django.http.response import HttpResponse
from .models import Bread, Menu, Vegetable, Source, Order
from datetime import datetime
from my_py import weather, temp
import json
from django.views.decorators.csrf import csrf_exempt

def kiosk(request):
    return render(request, 'kiosk/kioskmain.html')

def getMenu(request):
    get = {}
    for e in Menu.objects.all(): get[e.name] = e.img
    return HttpResponse(json.dumps(get), content_type='application/json')
  
def getBread(request):
    get = {}
    for e in Bread.objects.all(): get[e.name] = e.img
    return HttpResponse(json.dumps(get), content_type='application/json')
  
def getVege(request):
    get = {}
    for e in Vegetable.objects.all(): get[e.name] = e.img
    return HttpResponse(json.dumps(get), content_type='application/json')
  
def getSource(request):
    get = {}
    for e in Source.objects.all(): get[e.name] = e.img
    return HttpResponse(json.dumps(get), content_type='application/json')
 
@csrf_exempt   
def getOrder(request):
    re = request.POST.get('menu').split(',')
    re += request.POST.get('bread').split(',')
    re += request.POST.get('vegetable').split(',')
    re += request.POST.get('source').split(',')
    for e in re: 
        Order.objects.create(name=re.pop(), date=datetime.now(), temp=temp.getTemp(), weth=weather.getWeather())
    return render(request, 'kiosk/kioskmain.html')