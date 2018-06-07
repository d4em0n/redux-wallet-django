from django.urls import path
from . import views

urlpatterns = [
    path('api/wallet', views.WalletListCreate.as_view()),
    path('wallet', views.wallet_list),
    path('<int:pk>/wallet', views.wallet_detail)
]