# urls.py
from django.urls import include, path
from .views import MyTokenObtainPairView, PatientViewSet, UserRegistrationView, PatientVisitDashboardViewSet, VisitViewSet
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter



# Create a router and register your viewsets with it.
router = DefaultRouter()
router.register(r'patients', PatientVisitDashboardViewSet)
router.register(r'patientprofiles', PatientViewSet)
router.register(r'visits', VisitViewSet)



urlpatterns = [
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/register/', UserRegistrationView.as_view(), name='register'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/', include(router.urls)),

]

