#!/usr/bin/env python

# from distutils.core import setup
from setuptools import setup, find_packages
import metadata

app_name = metadata.name
version = metadata.version

setup(
    name = "django-%s" % app_name,
    version = version,

    packages = find_packages(),
    include_package_data = True,
    author = "Carlos Roberto Gomes Junior",
    author_email = "carlos.rberto@gmail.com",
    description = "jQuery captchajs - jQuery Plugin for django-simple-captcha",
    license = "MIT License",
    keywords = "django widget captcha django simple captcha",
    classifiers = [
        'Development Status :: 5 - Production/Stable',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Software Development :: Libraries :: Application Frameworks',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ],
    platforms = ['any'],
    url = "https://github.com/carlosrberto/django-captchajs",
    download_url = ""
)