from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from wallets.models import Wallet
from wallets.serializers import WalletSerializers
from rest_framework import generics

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

class WalletListCreate(generics.ListCreateAPIView):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializers

@api_view(['GET', 'POST'])
def wallet_list(request):
    if request.method == 'GET':
        wallets = Wallet.objects.all()
        serializer = WalletSerializers(wallets, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = WalletSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def wallet_detail(request, pk):
    try:
        wallet = Wallet.objects.get(pk=pk)
    except Wallet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = WalletSerializers(wallet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = WalletSerializers(wallet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        wallet.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)