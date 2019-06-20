from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length=50)
    img = models.CharField(max_length=100) 
    
class Bread(models.Model):
    name = models.CharField(max_length=50)
    img = models.CharField(max_length=100)
    
class Vegetable(models.Model):
    name = models.CharField(max_length=50)
    img = models.CharField(max_length=100)
    
class Source(models.Model):
    name = models.CharField(max_length=50)
    img = models.CharField(max_length=100)
    
class Order(models.Model):
    branch = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    date = models.DateTimeField()
    temp = models.FloatField(max_length=3)
    weth = models.CharField(max_length=20)