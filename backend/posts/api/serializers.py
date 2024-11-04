from rest_framework.serializers import ModelSerializer
from ..models import Post,Theater, Show, Performance, Ticket, Customer, Booking

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ('title' , 'body')

class TheaterSerializer(ModelSerializer):
    class Meta:
        model = Theater
        fields = ('name' , 'location','seating_capacity')

class ShowSerializer(ModelSerializer):
    class Meta:
        model = Show
        fields = ('' , '')

class PerformanceSerializer(ModelSerializer):
    class Meta:
        model = Performance
        fields = ('' , '')

class TicketSerializer(ModelSerializer):
    class Meta:
        model = Ticket
        fields = ('' , '')

class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = ('' , '')

class BookingSerializer(ModelSerializer):
    class Meta:
        model = Booking
        fields = ('' , '')