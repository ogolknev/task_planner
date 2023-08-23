from django.shortcuts import render
from django.template.defaulttags import register

@register.filter
def get_range(value):
    return range(value)

@register.filter
def get_parity(value):
    return not value % 2

# Create your views here.
def index(request):
    return render(request, 'main/index.html')