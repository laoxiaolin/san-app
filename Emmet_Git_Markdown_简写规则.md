
Emmet简写规则

1. E 代表HTML标签。
2. E#id 代表id属性。
3. E.class 代表class属性。
4. E[attr=foo] 代表某一个特定属性。
5. E{foo} 代表标签包含的内容是foo。
6. E>N 代表N是E的子元素。
7. E+N 代表N是E的同级元素。
8. E^N 代表N是E的上级元素。

===========================================================================================================


Git文件 .gitignore 的格式规范如下：

所有空行或者以注释符号 ＃ 开头的行都会被 Git 忽略。
可以使用标准的 glob 模式匹配。
匹配模式最后跟反斜杠（/）说明要忽略的是目录。
要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。

所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。星号（*）匹配零个或多个任意字符；[abc] 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；问号（?）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 [0-9]表示匹配所有 0 到 9 的数字）。

例子：
# 此为注释 – 将被 Git 忽略
# 忽略所有 .a 结尾的文件
*.a
# 但 lib.a 除外
!lib.a
# 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
/TODO
# 忽略 build/ 目录下的所有文件
build/
# 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
doc/*.txt
# ignore all .txt files in the doc/ directory
doc/**/*.txt


===========================================================================================================


Markdown基本语法

> 代码引用

  需要引用代码时，如果引用的语句只有一段，不分行，可以用 ` 将语句包起来。
  如果引用的语句为多行，可以将```置于这段代码的首行和末行。如果需要高亮显示可以采用如下方式，```javascript

> Inline code

  `<addr>` element here instead.

> 粗体、斜体、删除线

  Markdown 的粗体和斜体也非常简单，用 ** 包含一段文本就是粗体的语法，用一个 * 包含一段文本就是斜体的语法。
  用 ~~ 包含一段文本就是删除线的语法



> 引用

  在我们写作的时候经常需要引用他人的文字，这个时候引用这个格式就很有必要了，在 Markdown 中，你只需要在你希望引用的文字前面加上 > 就好了。区块引用可以嵌套，只要根据层次加上不同数量的 > 


> 链接和图片

  在 Markdown 中，插入链接不需要其他按钮，你只需要使用 [显示文本](链接地址) 这样的语法即可，例如：[简书](http://www.jianshu.com)

  在 Markdown 中，插入图片不需要其他按钮，你只需要使用 ![](图片链接地址) 这样的语法即可，例如：![](http://upload-images.jianshu.io/upload_images/259-0ad0d0bfc1c608b6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 列表

  列表格式也很常用，在 Markdown 中，你只需要在文字前面加上 - 就可以了
  如果你希望有序列表，也可以在文字前面加上 1. 2. 3. 就可以了，


> 标题

  这是最为常用的格式，在平时常用的的文本编辑器中大多是这样实现的：输入文本、选中文本、设置标题格式。

  而在 Markdown 中，你只需要在文本前面加上 # 即可，同理、你还可以增加二级标题、三级标题、四级标题、五级标题和六级标题，总共六级，只需要增加 # 即可，标题字号相应降低。例如：
  # 一级标题
  ## 二级标题
  ### 三级标题
  #### 四级标题
  ##### 五级标题
  ###### 六级标题


> 分割线
  在 Markdown 中，可以制作分割线，例如：---


> Automatic linking for URLs  
  
  like http://www.github.com/)


> Issue references within a repository

  Any number that refers to an Issue or Pull Request will be automatically converted into a link.

  #1
  mojombo#1
  mojombo/github-flavored-markdown#1


> Task Lists

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item