from rest_framework import serializers
from wallets.models import Wallet

class WalletSerializers(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = '__all__'