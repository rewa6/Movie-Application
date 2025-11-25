from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.conf import settings
from .models import Seat

@receiver(post_migrate)
def set_seatcount(sender, **kwargs):
    seatcount_value = getattr(settings, 'SEATCOUNT_VALUE', 0) # Default to 0 if not set
    Seat.objects.update(seatcount=seatcount_value)
