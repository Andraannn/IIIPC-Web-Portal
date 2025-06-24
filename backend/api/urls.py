from django.urls import path
from .views import hello, AnnouncementList, EventList

urlpatterns = [
    path('hello/', hello),
    path('announcements/', AnnouncementList.as_view(), name='announcement-list'),
    path('events/', EventList.as_view(), name='event-list'),
]