from django.db import models

# Create your models here.

class QuotesCollecter(models.Model):
    
    context = models.CharField(max_length=500)
    author = models.CharField(max_length=100,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    