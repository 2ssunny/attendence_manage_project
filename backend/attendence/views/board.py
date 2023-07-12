# rest
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from attendence.utils.board import insert_utils_board


@csrf_exempt
def insert_board(request):
    return JsonResponse(data=insert_utils_board())
