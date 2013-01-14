from django.shortcuts import render_to_response, HttpResponse
from django.template import RequestContext
from forms import CaptchaForm
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def update_captcha(request):
	form = CaptchaForm()
	VARS = { 'form' : form }
	return render_to_response('captchajs/form.html', VARS, context_instance=RequestContext(request))