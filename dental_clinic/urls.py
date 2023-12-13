
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path('admin-panel/', include('admin_app.urls')),
    path('', include('public_app.urls')),
]

