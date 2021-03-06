# Generated by Django 4.0.4 on 2022-05-19 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cocktails',
            fields=[
                ('CocktailId', models.AutoField(primary_key=True, serialize=False)),
                ('CocktailName', models.CharField(max_length=100)),
                ('Ingredient', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Ingredients',
            fields=[
                ('IngredientId', models.AutoField(primary_key=True, serialize=False)),
                ('IngredientName', models.CharField(max_length=100)),
                ('PhotoFileName', models.CharField(max_length=100)),
            ],
        ),
    ]
