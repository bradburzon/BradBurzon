---
title: home
layout: homepage
description: Welcome to Brad Burzon's website. Here you can learn with Brad about programming and also other things you may be interested.
image: ""
---
# Welcome!
## My name is Brad Burzon.
## I am programmer who very much likes to code and fix bugs.
## Here, you can read my posts and see my projects.

<br>
[Recent Posts](../posts/)
<div class="box">
  {% for post in site.posts limit:3 %}
  <div class="item-container">
    <div>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </div>
    <div>
      {% if post.image == "" %}
      <a href="{{ post.url }}" ><img class="post img-fluid" src="images/bulb.jpg" alt="light bulb picture"></a>
      {% else %}
      <a href="{{ post.url }}" ><img class="post img-fluid" src="{{ post.image }}" alt="light bulb picture"></a>
      {% endif %}
    </div>
    <div>
    {% if post.description == "" %}
      <p>{{ post.title }}</p>
    {% else %}
      <p>{{ post.description | truncate:100}}</p>
    {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
