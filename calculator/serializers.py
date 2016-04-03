from swampdragon.serializers.model_serializer import ModelSerializer


class CalculationSerializer(ModelSerializer):
    class Meta:
        model = 'calculator.Calculation'
        publish_fields = ('to_calculate', 'answer')
