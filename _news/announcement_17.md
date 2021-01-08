---

layout: post
date: 2021-01-08
inline: true

---



Courses I am teaching in Spring 2021. 

<html>
<head>
<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  /*width: 33.33%;*/ /*use this width for 3 columns*/ 
  width: 50%; /*use this width for 2 columns*/
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 500px) {
  .column {
    width: 100%;
  }
}
</style>
</head>
<body>

<div class="row">
  <div class="column">
    <img src="/assets/img/2021/01/intermediate-french.png" alt="FREN 2010 Poster" style="width:100%">
  </div>
  <div class="column">
    <img src="/assets/img/2021/01/fren-3585-poster-small.png" alt="FREN 3585 Poster" style="width:100%">
  </div>
