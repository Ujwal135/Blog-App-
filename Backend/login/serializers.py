from django.contrib.auth.models import User
from rest_framework import serializers
from quotecollecter.models import QuotesCollecter
from django.contrib.auth import authenticate


class RegisterSerializer(serializers.ModelSerializer):
    
    password = serializers.CharField(write_only = True)
    
    class Meta:
        model = User
        fields = ['username','email','password']
    
    def create(self,validated_data):
        user = User.objects.create_user(
            
            username= validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        
        return user 
    
class QuoteSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = QuotesCollecter
        fields = ['context','author']
            
            
            
        
class LoginSerializer(serializers.Serializer):
    
    username = serializers.CharField()
    password = serializers.CharField()
    
    def validate(self,data):
        user = authenticate(
            username = data['username'],
            password = data['password']
        )
        
        if not user:
            raise serializers.ValidationError("Invalid Credentials")
        
        data['user'] = user
        
        return data
    
    