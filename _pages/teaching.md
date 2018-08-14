---
layout: default
title: teaching
permalink: /teaching/
---

<div class="header-bar">
  <h1>teaching</h1>
  <h2>teaching statement, syllabi, and various teaching materials.</h2>
</div>

<div class="home">
  <!-- <h1 class="page-heading">Presentations</h1> -->
  <ul class="post-list">
    {% for post in site.categories.teaching %}
      <li>
        <span class="post-meta">{{ post.date  | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <span class="address p">{{ post.excerpt | strip_html }}</span>
      </li>
    {% endfor %}
  </ul>
  <!-- <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p> -->
</div>