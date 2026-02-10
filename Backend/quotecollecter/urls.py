from django import urls
from django.urls import path
from .views import QuoteApiview

urlpatterns = [
    path('quotes/',QuoteApiview.as_view())
]