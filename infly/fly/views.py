from django.shortcuts import render
from fly.models import Category,Item
# Create your views here.

def index(request):
    items = Item.objects.filter()[0:4]
    categories = Category.objects.all()

    context = {
        'categories': categories,
        'items':items,
    }
    return render(request,'fly/index.html',context)

# def index(request):
#     return render(request, 'fly/index.html')
