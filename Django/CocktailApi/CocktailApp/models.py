from django.db import models

# Create your models here.
class Ingredients(models.Model):
    IngredientId = models.AutoField(primary_key=True)
    IngredientName = models.CharField(max_length=100)

class Cocktails(models.Model):
    CocktailId = models.AutoField(primary_key=True)
    CocktailName = models.CharField(max_length=100)
    Ingredient = models.CharField(max_length=100)
    PhotoFileName = models.CharField(max_length=100, default="ImageNotFound.jpg")