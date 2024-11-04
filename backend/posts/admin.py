from django.contrib import admin
from .models import Post,Theater, Show, Performance, Ticket, Customer, Booking
# Register your models here.

admin.site.register(Post)
admin.site.register(Theater)
admin.site.register(Show)
admin.site.register(Performance)
admin.site.register(Ticket)
admin.site.register(Customer)
admin.site.register(Booking)