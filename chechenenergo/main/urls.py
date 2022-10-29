from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('home', views.home),
    path('about', views.about),
    path('territory', views.territory),
    path('topmenegment', views.topmenegment),
    path('priyomgrazhdan', views.priyomgrazhdan),
    path('papers', views.papers),
    path('meeting', views.meeting),
    path('directors', views.directors),
    path('office', views.office),
    path('technology', views.technology),
    path('news', views.news),
    path('gallery', views.gallery),
    path('contacts', views.contacts),
    path('news/<int:pk>', views.NewsDetalView.as_view(), name = 'news-detail')
]