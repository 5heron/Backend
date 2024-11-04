from rest_framework.serializers import ModelSerializer
from ..models import Theater, Show, Performance, Ticket, Customer, Booking


class TheaterSerializer(ModelSerializer):
    class Meta:
        model = Theater
        fields = ('name' , 'location','seating_capacity')

class ShowSerializer(ModelSerializer):
    class Meta:
        model = Show
        fields = ('title' , 'description','duration_minutes','genre','age_rating')

class PerformanceSerializer(ModelSerializer):
    class Meta:
        model = Performance
        fields = ('show' , 'theater','date_time')

class TicketSerializer(ModelSerializer):
    class Meta:
        model = Ticket
        fields = ('performance' , 'seat_number','price','is_booked')

class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = ('first_name' , 'last_name','email','phone_number')

class BookingSerializer(ModelSerializer):
    class Meta:
        model = Booking
        fields = ('customer' , 'performance','tickets','booking_date','total_price')