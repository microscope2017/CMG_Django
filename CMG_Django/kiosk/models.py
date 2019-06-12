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