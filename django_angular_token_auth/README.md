link https://habrahabr.ru/post/243427/

INIT
----
    cd .. && django-admin.py startproject django_angular_token_auth
    cd django_angular_token_auth/
    mkdir static templates
    add in django_angular_token_auth/settings.py : 
                                                STATICFILES_DIRS = (
                                                     os.path.join(BASE_DIR, 'static'),
                                                 )
                                                 TEMPLATE_DIRS = (
                                                     os.path.join(BASE_DIR, 'templates'),
                                                 )

job
===
    add in django_angular_token_auth/settings.py
    import datetime
    ...
    INSTALLED_APPS = (
        ...,
        'rest_framework',
    )
    
    REST_FRAMEWORK = {
        'DEFAULT_PERMISSION_CLASSES': (
            'rest_framework.permissions.IsAuthenticated',
        ),
        'DEFAULT_AUTHENTICATION_CLASSES': (
            'rest_framework.authentication.SessionAuthentication',
            'rest_framework.authentication.BasicAuthentication',
            'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
       )
    }
    
    JWT_AUTH = {
        'JWT_EXPIRATION_DELTA': datetime.timedelta(days=14)
    }

    python manage.py startapp authentication

install lib
===========
    pip install djangorestframework
    pip install djangorestframework-jwt
