from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import RegisterSerializer,LoginSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated




# Create your views here.

class RegisterView(APIView):    
    
    def post(self,request):
        
        serializer = RegisterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
        

    def get(self,request):
        users = User.objects.all()
        serializer = RegisterSerializer(users,many = True)
        return Response(serializer.data)
        
        
        
        
        
        
        
        
class LoginView(APIView):
    def post(self,request):
        serializer = LoginSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        
        
        user = serializer.validated_data['user']
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'refresh':str(refresh),
            'access' :str(refresh.access_token),    
            'user':{
                'id':user.id,
                'email':user.email,
                'username': user.username,
            }
            
        },status=status.HTTP_200_OK)
        