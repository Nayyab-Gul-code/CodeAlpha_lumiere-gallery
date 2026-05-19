<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Lumière Gallery Documentation</title>

  <style>

    body{
      font-family: Arial, sans-serif;
      background:#111;
      color:#f5f5f5;
      padding:40px;
      line-height:1.8;
    }

    h1,h2,h3{
      color:#d4af37;
    }

    .container{
      max-width:1000px;
      margin:auto;
      background:#1c1c1c;
      padding:30px;
      border-radius:10px;
    }

    table{
      width:100%;
      border-collapse:collapse;
      margin-top:20px;
      margin-bottom:20px;
    }

    table, th, td{
      border:1px solid #444;
    }

    th, td{
      padding:12px;
      text-align:left;
    }

    th{
      background:#222;
      color:#d4af37;
    }

    code{
      background:#222;
      padding:2px 6px;
      border-radius:4px;
      color:#00ffcc;
    }

    pre{
      background:#000;
      padding:15px;
      overflow:auto;
      border-radius:8px;
    }

    ul{
      margin-left:20px;
    }

    hr{
      border:1px solid #333;
      margin:30px 0;
    }

  </style>

</head>
<body>

  <div class="container">

    <h1>Lumière Image Gallery Documentation</h1>

    <p>
      Lumière is a modern responsive image gallery website developed using
      HTML, CSS, and JavaScript.
      It includes filtering, hover animations, lightbox preview,
      image effects, and responsive layouts.
    </p>

    <hr>

    <h2>Technologies Used</h2>

    <table>

      <tr>
        <th>Technology</th>
        <th>Purpose</th>
      </tr>

      <tr>
        <td>HTML5</td>
        <td>Website Structure</td>
      </tr>

      <tr>
        <td>CSS3</td>
        <td>Styling & Responsive Design</td>
      </tr>

      <tr>
        <td>JavaScript</td>
        <td>Interactivity & Lightbox Features</td>
      </tr>

    </table>

    <hr>

    <h2>Project Features</h2>

    <ul>
      <li>Responsive Image Gallery</li>
      <li>Hover Zoom Effects</li>
      <li>Image Filtering Categories</li>
      <li>Lightbox Image Preview</li>
      <li>Previous / Next Navigation</li>
      <li>CSS Image Effects</li>
      <li>Modern Dark Luxury UI</li>
    </ul>

    <hr>

    <h2>Folder Structure</h2>

<pre>
Lumiere-Gallery/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── gallery.js
└── images/
</pre>

    <hr>

    <h2>HTML Structure</h2>

    <p>
      The HTML file contains:
    </p>

    <ul>
      <li>Header Section</li>
      <li>Filter Navigation Buttons</li>
      <li>Hero Section</li>
      <li>Gallery Grid</li>
      <li>Lightbox Modal</li>
      <li>Footer</li>
    </ul>

<pre>
&lt;div class="gallery-item"&gt;
    &lt;div class="img-wrap"&gt;
        &lt;img src="image.jpg" alt=""&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

    <hr>

    <h2>CSS Styling</h2>

    <p>
      CSS is used for layout, animations, responsive design,
      hover effects, and overall visual appearance.
    </p>

<pre>
.gallery-item{
    height:300px;
    overflow:hidden;
}

.img-wrap img{
    width:100%;
    height:100%;
    object-fit:cover;
}
</pre>

    <hr>

    <h2>JavaScript Functionality</h2>

    <p>
      JavaScript handles:
    </p>

    <ul>
      <li>Image Filtering</li>
      <li>Lightbox Opening</li>
      <li>Previous / Next Buttons</li>
      <li>Close Modal</li>
      <li>Image Effects</li>
    </ul>

<pre>
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Filter Logic

    });

});
</pre>

    <hr>

    <h2>Responsive Design</h2>

    <p>
      Media queries are used for different screen sizes.
    </p>

    <table>

      <tr>
        <th>Device</th>
        <th>Layout</th>
      </tr>

      <tr>
        <td>Desktop</td>
        <td>3 Columns</td>
      </tr>

      <tr>
        <td>Tablet</td>
        <td>2 Columns</td>
      </tr>

      <tr>
        <td>Mobile</td>
        <td>1 Column</td>
      </tr>

    </table>

<pre>
@media (max-width:768px){

    .gallery-grid{
        grid-template-columns:repeat(2,1fr);
    }

}
</pre>

    <hr>

    <h2>How to Run the Project</h2>

    <ol>
      <li>Download the project folder</li>
      <li>Open the folder</li>
      <li>Run <code>index.html</code> in browser</li>
    </ol>

    <hr>

    <h2>Advantages</h2>

    <ul>
      <li>Easy to Customize</li>
      <li>Responsive Design</li>
      <li>Modern User Interface</li>
      <li>Smooth User Experience</li>
      <li>Interactive Gallery</li>
    </ul>

    <hr>

    <h2>Future Improvements</h2>

    <ul>
      <li>Dark / Light Mode</li>
      <li>Search Functionality</li>
      <li>Image Upload Feature</li>
      <li>Database Integration</li>
      <li>Slideshow Animation</li>
    </ul>

    <hr>

    <h2>Conclusion</h2>

    <p>
      The Lumière Gallery project demonstrates how HTML, CSS,
      and JavaScript can be used together to create a professional,
      responsive, and interactive image gallery website with modern UI design.
    </p>

  </div>

</body>
</html>
