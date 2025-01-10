from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('habit/<int:habit_id>/', views.habit_detail, name='habit_detail'),
]

from django.shortcuts import render, get_object_or_404
from .models import Habit

def index(request):
    habits = Habit.objects.filter(user=request.user)
    return render(request, 'index.html', {'habits': habits})

def habit_detail(request, habit_id):
    habit = get_object_or_404(Habit, id=habit_id)
    return render(request, 'habit_detail.html', {'habit': habit})