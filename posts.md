---
layout: post
title: posts
permalink: /posts/
---

# want to read something?

<ol>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ol>
