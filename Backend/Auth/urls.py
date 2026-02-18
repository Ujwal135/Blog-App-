
from django.contrib import admin
from django.urls import re_path
from django.urls import path,include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include("login.urls")),
    path('api/',include('quotecollecter.urls')),
    path('api/',include('Profile.urls')),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),


    
]
