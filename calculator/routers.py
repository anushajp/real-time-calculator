from swampdragon import route_handler
from swampdragon.route_handler import ModelRouter
from calculator.models import Calculation
from calculator.serializers import CalculationSerializer


class CalculationRouter(ModelRouter):
    route_name = 'calculation-details'
    serializer_class = CalculationSerializer
    model = Calculation

    def get_object(self, **kwargs):
        return self.model.objects.get(pk=kwargs['id'])

    def get_query_set(self, **kwargs):
        return self.model.objects.all()

route_handler.register(CalculationRouter)
