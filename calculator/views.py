from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse, JsonResponse

from calculator.models import Calculation

class Home(View):
    def get(self, request):
        return render(request, 'calculator/home.html', locals())

    def post(self, request):
        if request.is_ajax:
            try:
                calculation = Calculation.objects.create(
                    to_calculate=request.POST.get('to_calculate'),
                    answer=request.POST.get('answer')
                )
                return JsonResponse({"message": "success"})
            except (Exception) as e:
                return JsonResponse({"message": "failed with error; '{0}'".format(e)})
