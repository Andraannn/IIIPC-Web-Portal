from django.contrib import admin
from .models import Announcement, Event

admin.site.register(Announcement)
admin.site.register(Event)