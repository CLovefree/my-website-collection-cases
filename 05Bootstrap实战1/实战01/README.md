# [Bootstrap项目实战记录](https://htmlpreview.github.io/?https://raw.githubusercontent.com/CLovefree/my-website-collection-cases/master/05Bootstrap%E5%AE%9E%E6%88%981/%E5%AE%9E%E6%88%9801/index.html)

## 初始部分

1. 引入css,jquery,和bootstrap.js。注意jquery在前
2. <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
3. container1200container-fluid

## 响应式导航

1. ![nav](img\nav.png)
2. role="navigation增加可访问性
3. navbar-fixed-top固定在顶部
4. glyphicon图标应用；icon-bar应用
5. 导航的 style="margin-top:0"

## 轮播图

1. ![carousel](img\carousel.png)
2. 设置箭头垂直居中，
   - js方法分别获取每张图的高度并赋值；
   - 图标方法class="glyphicon glyphicon-chevron-left”
3. 箭头font-size
4. 轮播图自动播放

## 主要内容

1. 多媒体对象media object图文混排

   ul.media-list>media>a.media-left>img.media-object

   ​                                  div.media-body>h4.media-heading

2. 栅格布局

3. 媒体查询，移动端优先，没有小于768px

4. 设置图文排列中文字垂直居中

## information页面

1. 超大屏幕（Jumbotron）。顾名思义该组件可以增加标题的大小，并为登陆页面内容添加更多的外边距（margin）。使用超大屏幕（Jumbotron）的步骤如下：

   - 创建一个带有 class **.jumbotron**. 的容器 <div>。
   - 除了更大的 <h1>，字体粗细 font-weight被减为 200。

2. 左边的图文结构再做一个百分之百的栅格系统

   - 左边图片，img-responsive图片响应式
   - 右边文字，p class="hidden-xs小屏幕隐藏

3. container-fluid的padding

4. 标题只显示一行，其余...

   ```
   	.info-content h4 {
   		font-size: 16px;
   		overflow: hidden;
   		white-space: nowrap;
   		text-overflow: ellipsis;
   	}
   ```


## case

1. 缩略图thumbnail

