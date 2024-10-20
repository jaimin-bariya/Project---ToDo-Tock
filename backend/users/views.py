from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework import generics
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser
from .serializers import CustomUserSerializer
from django.contrib.auth.hashers import make_password
import logging

logger = logging.getLogger(__name__)

class SignupView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny] 

    def create(self, request, *args, **kwargs):
        logger.info("Request data: %s", request.data)  # Log the incoming data
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(serializer.data, status=201)  # Use 201 created status
        else:
            logger.error("Validation errors: %s", serializer.errors)  # Log validation errors
            return Response(serializer.errors, status=400)  # Use 400 bad request status


class LoginView(generics.GenericAPIView):
    serializer_class = CustomUserSerializer

    def post(self, request):
        username_or_email = request.data.get('username')
        password = request.data.get('password')

        # Check for missing fields
        if not username_or_email or not password:
            return Response({'error': 'Username and password are required.'}, status=400)

        # Try to find the user
        user = CustomUser.objects.filter(username=username_or_email).first() or \
               CustomUser.objects.filter(email=username_or_email).first()

        if user is None:
            return Response({'error': 'User not found.'}, status=404)  # User not found

        # Check if the password is correct
        if not user.check_password(password):
            print("wrong pass")
            return Response({'error': 'Invalid password.'}, status=400)  # Invalid password

        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)

        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
            }
        })
