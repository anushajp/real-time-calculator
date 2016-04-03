from django.db import models
from swampdragon.models import SelfPublishModel
from calculator.serializers import CalculationSerializer


class Calculation(SelfPublishModel, models.Model):
    serializer_class = CalculationSerializer
    to_calculate = models.TextField()
    answer = models.IntegerField()
