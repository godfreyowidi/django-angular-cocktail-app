from django.urls import re_path as url
from CocktailApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^cocktail/$', views.cocktail_list),
    url(r'^cocktail/([0-9]+)/$', views.cocktail_list),

    url(r'^ingredient/$', views.ingredient_list),
    url(r'^ingredient/([0-9]+)/$', views.ingredient_list),

    url(r'^SaveFile/$', views.SaveFile),
] + static(settings.IMG_URL, document_root=settings.IMG_ROOT)