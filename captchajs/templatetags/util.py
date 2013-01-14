def response_mimetype(request):
	
	tridentEngine = 'Trident' in request.META['HTTP_USER_AGENT'] or 'MSIE' in request.META['HTTP_USER_AGENT']
	
	print tridentEngine
	
	if	tridentEngine:
		return 'text/html'
	else:
		return 'application/json'