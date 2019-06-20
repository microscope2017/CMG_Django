from django.shortcuts import render
from django.http.response import HttpResponse
from .models import Bread, Menu, Vegetable, Source, Order
from datetime import datetime
from my_py import weather, temp
import json
from django.views.decorators.csrf import csrf_exempt

def kiosk(request):
    return render(request, 'kiosk/kioskmain.html')

def ingredients(request):
    getData = {}
    whichone = request.GET.get('which')
    getqset = []
    if 'menu' in whichone: getqset = Menu.objects.all()
    elif 'bread' in whichone: getqset = Bread.objects.all()
    elif 'vegetable' in whichone: getqset = Vegetable.objects.all()
    elif 'source' in whichone: getqset = Source.objects.all()
    for e in getqset: getData[e.name] = e.img
    return HttpResponse(json.dumps(getData), content_type='application/json')
 
@csrf_exempt   
def getOrder(request):
    re = request.POST.get('menu').split(',')
    re += request.POST.get('bread').split(',')
    re += request.POST.get('vegetable').split(',')
    re += request.POST.get('source').split(',')
    for e in re:
        if e is not None:   
            Order.objects.create(branch='강남점', name=e, date=datetime.now(), temp=temp.getTemp(), weth=weather.getWeather())
    return render(request, 'kiosk/kioskmain.html')