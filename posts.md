---
layout: page
title: blog posts
description: Here are Brad Burzon's blog posts. Most of these relates to Java, Web development, and other miscellaneous fun stuff. Come have a read if you are bored.
permalink: /posts/
---
## Want to read something?

## Here are some of my findings and notes while programming.

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
      <a href="{{ post.url }}" ><img class="post img-fluid" src="../images/bulb.jpg" alt="light bulb picture"></a>
      {% else %}
      <a href="{{ post.url }}" ><img class="post img-fluid" src="{{ post.image }}" alt="light bulb picture"></a>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
