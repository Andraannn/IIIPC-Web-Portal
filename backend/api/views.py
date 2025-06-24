from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Announcement, Event
from .serializers import AnnouncementSerializer, EventSerializer


@api_view(['GET'])
def hello(request):
    return Response({"message": "This is the Home Page"})

class AnnouncementList(generics.ListAPIView):
    queryset = Announcement.objects.order_by('-created_at')
    serializer_class = AnnouncementSerializer

class EventList(generics.ListAPIView):
    queryset = Event.objects.order_by('event_date')
    serializer_class = EventSerializer