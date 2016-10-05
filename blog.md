---
layout: page
title: Blog
bgbigimage: tsh.jpg
permalink: /blog/
---
<div id="blog" class="container">
{% for category in site.categories %}
	<div class="category row">
		<a name="{{ category | first }}"></a>
		<div class="col-xs-12">
			<div class="cat-title">Category: <strong>{{ category | first }}</strong></div> 
  		</div>
    {% for posts in category %}
      {% for post in posts %}
      		{% if post.title != nil %}
      		<section class="col-xs-12">
			<div class="tb"><img src="{{ site.baseurl }}/images/{{ post.bgimage }}"></div>
			<div class="cont">
				<div class="date">{{ post.date | date: "%b %-d, %Y" }}</div>
				<h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
				<p>{{ post.short }} <a class="read-more" href="{{ post.url | prepend: site.baseurl }}">Read&nbsp;more</a></p>
        	</div>	
			</section>
			{% endif %}
      {% endfor %}
    {% endfor %}
	</div>
{% endfor %}
</div>
