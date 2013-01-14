jQuery captchajs
=======

jQuery Plugin for [django-simple-captcha](https://github.com/mbi/django-simple-captcha) 

Installation
--------

Install django-simple-captcha

```shell
pip install django-simple-captcha
```

Install captchajs

```shell
pip install -e git+git@github.com:carlosrberto/django-captchajs.git#egg=django-captchajs
```

- Add captchajs to INSTALLED_APPS
- Add captchajs URLs to main url patterns <code>url(r'^captchajs/', include('captchajs.urls')),</code>
- Load captchajs on templates <code>{% load captchajs %}</code>
- Call captchajs template tag <code>{% captchajs_scripts %}</code> to include javascripts
- Add the css class "captcha-update" on the button that updates the captcha
- Done, it's working
