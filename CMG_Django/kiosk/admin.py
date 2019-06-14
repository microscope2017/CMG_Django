from django.contrib import admin
from .models import Bread, Vegetable, Source, Menu, Order
# admin / admin@admin.com / choi03052386
# Register your models here.
admin.site.register(Bread)
admin.site.register(Vegetable)
admin.site.register(Source)
admin.site.register(Menu)
admin.site.register(Order)
