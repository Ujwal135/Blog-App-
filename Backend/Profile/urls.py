from django.urls import path
from .views import ProfileView


urlpatterns = [
    path('profileviews/',ProfileView.as_view())
]
