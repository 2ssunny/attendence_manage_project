from django.contrib import admin
from django.urls import path
from .views.about import get_views_about
from .views.board import insert_board

urlpatterns = [
    path("about/", get_views_about),
    path("insertBoard/", insert_board),
]
