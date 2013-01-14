from django.conf.urls import patterns, url

urlpatterns = patterns('',
	url(r'^update-captcha/', 'captchajs.views.update_captcha'),
)