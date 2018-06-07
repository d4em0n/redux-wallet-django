from django.db import models

# Create your models here.
class Wallet(models.Model):
    description = models.CharField(max_length=300)
    amount = models.DecimalField(max_digits=12, decimal_places=0)
