from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
import json

from anonymous_blog_server.utils.board import insert_utils_board


# 게시글 등록
@csrf_exempt
def insert_board(request):
    data = json.loads(request.body)
    return JsonResponse(
        data=insert_utils_board(
            board_seq=data.get('board_seq', None),
            board_title=data.get('board_title', None),
            board_content=data.get('board_content', None),
            board_writer=data.get('board_writer', None),
            board_password=data.get('board_password', None)
        )
    )