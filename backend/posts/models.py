from django.db import models

# Create your models here.

    
class Theater(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    seating_capacity = models.IntegerField()
    # models.py
    def __str__(self):
        return f"{self.name} ({self.location})"


class Show(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    duration_minutes = models.IntegerField()
    genre = models.CharField(max_length=50, blank=True, null=True)
    age_rating = models.CharField(max_length=10, blank=True, null=True)
    # fields...
    def __str__(self):
        return f"{self.title} ({self.genre}) - {self.age_rating}"


class Performance(models.Model):
    show = models.ForeignKey(Show, on_delete=models.CASCADE)
    theater = models.ForeignKey(Theater, on_delete=models.CASCADE)
    date_time = models.DateTimeField()
    available_seats = models.IntegerField()
    def __str__(self):
        return f"{self.show.title} at {self.theater.name} on {self.date_time.strftime('%Y-%m-%d %H:%M')}"

class Ticket(models.Model):
    performance = models.ForeignKey(Performance, on_delete=models.CASCADE)
    seat_number = models.CharField(max_length=10)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    is_booked = models.BooleanField(default=False)
    def __str__(self):
        return f"Seat {self.seat_number} for {self.performance}"
    
class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email})"
    
class Booking(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    performance = models.ForeignKey(Performance, on_delete=models.CASCADE)
    tickets = models.ManyToManyField(Ticket)
    booking_date = models.DateTimeField(auto_now_add=True)
    total_price = models.DecimalField(max_digits=6, decimal_places=2)
    # fields...
    def __str__(self):
        return f"Booking for {self.customer} on {self.booking_date.strftime('%Y-%m-%d %H:%M')}"