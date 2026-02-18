from django.shortcuts import render

# Create your views here.
from .serializer import ProfileSerializer
from rest_framework.views import APIView
from .models import Profile
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class ProfileView(APIView):
    
    permission_classes = [IsAuthenticated]  
    
    def get(self, request):
        
        user = request.user
        profile = Profile.objects.filter(user=user).first()

        if profile:
            serializer = ProfileSerializer(profile)
            return Response(serializer.data)

        return Response({
            'username': user.username,
            'email': user.email,
            'profile_img': None,
            'message': 'Profile not complete'
        })

