from django.contrib import admin
from .models import Bread
from .models import Vegetable
from .models import Source
from .models import Menu
# admin / admin@admin.com / choi03052386
# Register your models here.
admin.site.register(Bread)
admin.site.register(Vegetable)
admin.site.register(Source)
admin.site.register(Menu)

