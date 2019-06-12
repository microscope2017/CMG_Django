from django.urls import path

from . import views

urlpatterns = [
    path('', views.kiosk, name='kiosk'),
    path('getbread/', views.getBread, name='getbread'),
    path('getmenu/', views.getMenu, name='getmenu'),
    path('getvege/', views.getVege, name='getvege'),
    path('getsrc/', views.getSource, name='getsrc'),
]