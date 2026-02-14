from django.db import models
from django.contrib.auth.models import User


class Profile (models.Model):
    
    first_name = models.CharField(max_length=100)
    
    last_name = models.CharField(max_length=100)
    
    
    # Store image img in media folder 
    profile_image = models.ImageField(
        upload_to='profile/',
        null=True,
        blank=True)
    
    
    # One User one Profile
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    
    def __str__(self):
        return self.user.username

    
    
class Blogs(models.Model):
    
    title = models.CharField(
        max_length=200,
        )
    
    content = models.TextField(
        max_length=100000,
        )
    
    image = models.ImageField(
        upload_to='blogs/',
        null=True,
        blank=True
        )
    
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='blogs'
        )

    
    def __str__(self):
        return self.title
     
    
class Likes(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
        )
    
    blogs = models.ForeignKey(
        Blogs,
        on_delete=models.CASCADE
    )
     
     
class Comments(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    
    blogs = models.ForeignKey(
        Blogs,
        on_delete = models.CASCADE
    )
    
    content = models.TextField(
        max_length=300,
        null=True,
    )
    
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    
    def __str__(self):
        return f'{self.user.username} commented on {self.blogs.title}'
    
    