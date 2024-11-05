from django.contrib import admin
from .models import Theater, Show, Performance, Ticket, Customer, Booking

@admin.register(Theater)
class TheaterAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'seating_capacity')
    search_fields = ('name', 'location')
    ordering = ('name',)

@admin.register(Show)
class ShowAdmin(admin.ModelAdmin):
    list_display = ('title', 'genre', 'age_rating', 'duration_minutes')
    search_fields = ('title', 'genre')
    list_filter = ('genre', 'age_rating')
    ordering = ('title',)

@admin.register(Performance)
class PerformanceAdmin(admin.ModelAdmin):
    list_display = ('show', 'theater', 'date_time', 'available_seats')
    search_fields = ('show__title', 'theater__name')
    list_filter = ('theater', 'date_time')
    ordering = ('date_time',)

@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('performance', 'seat_number', 'price', 'is_booked')
    list_filter = ('is_booked', 'performance')
    search_fields = ('performance__show__title', 'seat_number')
    ordering = ('performance', 'seat_number')

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone_number')
    search_fields = ('first_name', 'last_name', 'email')
    ordering = ('last_name', 'first_name')

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('customer', 'performance', 'booking_date', 'total_price')
    list_filter = ('booking_date',)
    search_fields = ('customer__first_name', 'customer__last_name', 'performance__show__title')
    ordering = ('-booking_date',)
