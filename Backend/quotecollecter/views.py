from django.shortcuts import render
from .models import QuotesCollecter
import requests
from rest_framework.views import APIView
from login.serializers import QuoteSerializer
from rest_framework.response import Response

# Create your views here.

def quote_collecter():
    for _ in range(15):
        
        try:
            res = requests.get("https://api.quotable.io/random",timeout=6,verify=False).json()
            QuotesCollecter.objects.create(
            
            context = res['content'],
            author = res['author']
        )

        except Exception as e:
            print("Api error ",e)
            
        


class QuoteApiview(APIView):
    
    def get(self,request):
        quotes = QuotesCollecter.objects.all()[:5]
        serializer = QuoteSerializer(quotes,many= True)
        return Response(serializer.data)