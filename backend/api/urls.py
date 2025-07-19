from django.urls import path
from .views import AnnouncementList, EventList

urlpatterns = [
    path('announcements/', AnnouncementList.as_view(), name='announcement-list'),
    path('events/', EventList.as_view(), name='event-list'),
]