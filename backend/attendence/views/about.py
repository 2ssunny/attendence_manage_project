# rest
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from attendence.utils.about import insert_utils_board


@csrf_exempt
def insert_board(request):
    return JsonResponse(data=insert_utils_board())


def get_views_about():
    return {
        "about": "방황하여도, 풀밭에 고동을 따뜻한 날카로우나 수 같은 품으며, 사는가 것이다. 구하지 찾아 품으며, 있는 말이다. 이상이 인생에 얼마나 미묘한 있으며, 같으며, 바이며, 안고, 때문이다. 투명하되 많이 것은 가지에 철환하였는가? 그들은 이는 싹이 그들을 있는가? 원대하고, 곧 타오르고 것이다. 들어 인생에 이상의 구하지 보라. 만물은 낙원을 타오르고 살 그들은 품으며, 아니다. 천하를 가는 그들은 보내는 불러 피고 것이다.보라, 그것은 이 교향악이다."
    }
