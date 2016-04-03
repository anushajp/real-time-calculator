from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse

class Home(View):
    def get(self, request):
        return render(request, 'calculator/home.html', locals())