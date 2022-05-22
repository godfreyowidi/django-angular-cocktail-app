from rest_framework import serializers
from CocktailApp.models import Cocktails, Ingredients

class CocktailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cocktails
        fields = ('CocktailId', 'CocktailName', 'Ingredient', 'PhotoFileName')

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = ('IngredientId', 'IngredientName')