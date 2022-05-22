from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from CocktailApp.models import Cocktails, Ingredients
from CocktailApp.serializer import CocktailSerializer, IngredientSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def cocktail_list(request, id=0):
    if request.method == 'GET':
        cocktails = Cocktails.objects.all()
        serializer = CocktailSerializer(cocktails, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CocktailSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        cocktail = Cocktails.objects.get(CocktailId=data['CocktailId'])
        serializer = CocktailSerializer(cocktail, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        cocktail = Cocktails.objects.get(CocktailId=id)
        cocktail.delete()
        return JsonResponse({}, status=204)

@csrf_exempt
def ingredient_list(request, id=0):
    if request.method == 'GET':
        ingredients = Ingredients.objects.all()
        serializer = IngredientSerializer(ingredients, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = IngredientSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        ingredient = Ingredients.objects.get(IngredientId=data['IngredientId'])
        serializer = IngredientSerializer(ingredient, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        ingredient = Ingredients.objects.get(IngredientId=id)
        ingredient.delete()
        return JsonResponse({}, status=204)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['file']
    filename = default_storage.save(file.name, file)
    return JsonResponse({'filename': filename}, status=201)

