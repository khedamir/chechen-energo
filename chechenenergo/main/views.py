from django.shortcuts import render
from .models import Articles
from django.views.generic import DetailView

def index(request):
    news = Articles.objects.order_by('-date')[:6]
    return render(request, 'main/index.html', {'news': news})

def home(request):
    news = Articles.objects.order_by('-date')[:6]
    return render(request, 'main/home.html', {'news': news})



class NewsDetalView(DetailView):
    model = Articles
    template_name = 'main/details_view.html'
    context_object_name = 'article'





def about(request):
    return render(request, 'main/company/about.html')

def territory(request):
    return render(request, 'main/company/territory.html')

def topmenegment(request):
    return render(request, 'main/company/topmenegment.html')

def priyomgrazhdan(request):
    return render(request, 'main/company/priyomgrazhdan.html')

def papers(request):
    return render(request, 'main/aktsioneram/papers.html')

def meeting(request):
    return render(request, 'main/aktsioneram/meeting.html')

def directors(request):
    return render(request, 'main/aktsioneram/directors.html')


def office(request):
    return render(request, 'main/potrebitel/office.html')

def technology(request):
    return render(request, 'main/potrebitel/technology.html')


def news(request):
    news = Articles.objects.order_by('-date')
    return render(request, 'main/press/news.html', {'news': news})

def gallery(request):
    return render(request, 'main/press/gallery.html')

def contacts(request):
    return render(request, 'main/contacts/contacts.html')