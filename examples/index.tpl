<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FatriVueUI - 一套为开发者、准备的组件库</title>
    <link rel="stylesheet" href="//shadow.elemecdn.com/npm/highlight.js@9.3.0/styles/color-brewer.css">
    <meta name="description" content="FatriVueUI，一套为开发者、准备的组件库" />
</head>
<body>
 <div id="app"></div>
  <% if (process.env.NODE_ENV === 'production') { %>
       <script src="//shadow.elemecdn.com/npm/vue@2.5.21/dist/vue.runtime.min.js"></script>
       <script src="//shadow.elemecdn.com/npm/vue-router@3.0.1/dist/vue-router.min.js"></script>
       <script src="//shadow.elemecdn.com/app/element/highlight.pack.b1f71b31-3c07-11e9-ba1a-55bba1877129.js"></script>
     <% } %>
</body>
</html>
