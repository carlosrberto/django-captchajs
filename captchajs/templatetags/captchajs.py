# -*- coding: utf-8 -*-
from django.template import Context, Template, loader, Library
register = Library()

@register.simple_tag
def captchajs_scripts():
	t = loader.get_template('captchajs/scripts.html')
	c = Context({})
	return t.render(c)