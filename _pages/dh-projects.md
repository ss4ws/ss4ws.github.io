---
layout: default
title: dh projects
permalink: /dh-projects/
---

<div class="header-bar">
  <h1>dh projects</h1>
  <h2>digital humanities projects</h2>
</div>

<div class="home">
  <ul class="post-list">
    {% for post in site.categories.dh-projects %}
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