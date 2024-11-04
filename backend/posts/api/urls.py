from django.urls import path, include
from .views import RegisterView, LoginView, TheaterViewSet, ShowViewSet, PerformanceViewSet, TicketViewSet, CustomerViewSet, BookingViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'theaters', TheaterViewSet)
router.register(r'shows', ShowViewSet)
router.register(r'performances', PerformanceViewSet)
router.register(r'tickets', TicketViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'bookings', BookingViewSet)


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('', include(router.urls)),
]