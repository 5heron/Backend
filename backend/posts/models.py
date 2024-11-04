from django.db import models

# Create your models here.

    
class Theater(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    seating_capacity = models.IntegerField()


class Show(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    duration_minutes = models.IntegerField()
    genre = models.CharField(max_length=50, blank=True, null=True)
    age_rating = models.CharField(max_length=10, blank=True, null=True)


class Performance(models.Model):
    show = models.ForeignKey(Show, on_delete=models.CASCADE)
    theater = models.ForeignKey(Theater, on_delete=models.CASCADE)
    date_time = models.DateTimeField()
    available_seats = models.IntegerField()

class Ticket(models.Model):
    performance = models.ForeignKey(Performance, on_delete=models.CASCADE)
    seat_number = models.CharField(max_length=10)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    is_booked = models.BooleanField(default=False)

class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

class Booking(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    performance = models.ForeignKey(Performance, on_delete=models.CASCADE)
    tickets = models.ManyToManyField(Ticket)
    booking_date = models.DateTimeField(auto_now_add=True)
    total_price = models.DecimalField(max_digits=6, decimal_places=2)