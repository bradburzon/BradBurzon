---
layout: page
title: blog posts
description: Here are Brad Burzon's blog posts. Most of these relates to Java, Web development, and other miscellaneous fun stuff. Come have a read if you are bored.
permalink: /posts/
---



<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
