from django.urls import path

from . import views

urlpatterns = [
    path('', views.kiosk, name='kiosk'),
    path('ingredients', views.ingredients, name='ingredients'),
    path('getorder', views.getOrder, name='getorder'),
]