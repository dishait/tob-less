<script setup>
  import { ref } from "vue"
  import colors from "./design/colors.js"
  import shadows from "./design/shadows.js"
  import roundeds from "./design/roundeds.js"
 
  const justifys = [
    'center',
    'evenly',
    'around',
    'between',
    'start',
    'end'
  ]

  const items = [
    'center',
    'stretch',
    'baseline',
    'start',
    'end'
  ]

  const directions = [
    'flex-row',
    'flex-col',
    'flex-row-reverse',
    'flex-col-reverse',
  ]

  const fonts = [
    'thin',
    'extralight',
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black'
  ]

  const textSizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl',
  ]
  
  const Theme = ref('theme-B')
  const toggleTheme = () => {
	  Theme.value = Theme.value === 'theme-B' ? 'theme-C' : 'theme-B'
  }

  const AppTheme = ref('')

  const ToggleAppTheme = (v) => {
	  AppTheme.value = `theme-${v}`
  }

  const range = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
</script>

<style scoped lang="less">
@import (reference, less) './design/theme.css';
.block-1 {
    .w-9;
    .h-6;
    .mr-3;
    .my-1;
    .flex; 
    .rounded; 
    .bg-accent;
    .text-white; 
    .items-center; 
    .justify-center;    
    .bg-opacity-100; 
}

.block-common {
    .mr-3;
    .my-1;
    .flex-1;
    .rounded; 
    .bg-accent;
    .bg-opacity-100;
}

.container {
  .px-3;
  .py-2;
  .mt-4;
  .bg-accent; 
  .rounded-lg; 
  .bg-opacity-10;
}

.theme-B {
	--primary: 245,34,45;
}

.theme-C {
	--primary: 250,173,20;
}
</style>

# 指南

:::tip 一切都是为了开发效率

为了提高开发效率，让大家有更多的时间做更多其他的事情。
:::

<br />
<br />

## 特点 :+1:

### 原子的 

如果你有用过 <t-tag color="accent">Tailwind</t-tag> 或 <t-tag color="info">Windicss</t-tag>，就会发现使用 原子css 会比 传统css 开发更快。  
而且当项目逐渐变大后，体积的增幅将会更小，因为所有的样式都是复用原先的样式，不需要重新定义。  

所以理所当然的，该样式库使用了 原子css。

:point_down: 例如下边这个按钮，同样的效果，不一样的写法。

<t-btn color="success"> Success </t-btn>

原子模式下

```vue
<template>
	<!-- 原子模式下开发更快，但是模板更乱，语义化更弱 -->
	<div class="bg-success rounded text-white py-1">
		Success
	</div>
</template>
```
传统模式下

```vue
<template>
	<!-- 传统模式下清晰的模板和语义化，但开发较慢 -->
	<div class="btn"> Success </div>
</template>

<style scoped>
	/** 需要每次自行定义 class **/
	.btn {
		color: white;
		padding: 10rpx;
		border-radius: 0.25rem;
		background-color: #10b981;
	}
</style>
```

<br />
<br />

### Mixins

采用原子 css 会丢失掉模板结构的语义化，同时使得模板更复杂与混乱。  
所以为了让模板语义化和结构更清晰，该样式库也支持用 [Mixins](https://lesscss.org/features/#mixins-feature) 去书写更具语义化的样式。

<t-btn color="success"> Success </t-btn>

```vue
<template>
	<!-- 清晰的模板和语义化 -->
	<div class="btn"> 我是有颜色的 </div>
</template>

<style scoped lang="less">
	/** 在style标签下得重新引入库 **/
	@import (reference) '@/uni_modules/tob-less/index.less';

	/** mixin样式库，使得设计更统一 **/
	.btn {
		.py-1;
		.rounded;
		.text-white;
		.bg-success;
	}
</style>
```

:::warning 最佳实践
如果你正在构建的模板非常简单，那么你应该始终使用内联原子 css 去构建。

<p>
  因为使用 <t-tag color="warning"> less </t-tag> 的 <t-tag color="warning"> Mixins </t-tag> 去构建将产生冗余的样式。
</p>
:::

<br />
<br />

## 使用 :beer:

### 安装 tob-less 插件

首先前往 👉 [插件市场 tob-less](https://ext.dcloud.net.cn/plugin?id=7079) 使用 HBuliderx 导入插件

![tob-less](./plugin.png)


<br />
<br />

### 安装 less 插件 

由于样式库是用的 less，需要通过 <t-tag>less插件</t-tag> 来编译成 css。

<br />


#### 如何安装?

1. 最新版的 <t-tag color="success"> HbuilderX </t-tag> 在启动 <t-tag> uniapp </t-tag> 项目时将会自动安装 <t-tag>less插件</t-tag>，等待安装即可。

2. 稍旧一点的版本的 <t-tag color="success"> HbuilderX </t-tag> 需要前往 [插件市场 - less编译](https://ext.dcloud.net.cn/plugin?id=2031) 手动安装插件。

![install-plugin](/guide/install-plugin.png)

<br />
<br />

### App.vue 中引入 

首先在 <t-tag>App.vue</t-tag> 文件的 <t-tag>style</t-tag> 里直接引入样式库。

```vue
<!-- App.vue -->
<style lang="less">
	@import '@/uni_modules/tob-less/index.less';
</style>
```

<br />
<br />

### 使用原子 css

以上步骤完成之后就可以直接在模板中使用了。

<div class="text-primary"> 我是一段文本 </div>

```vue
<template>
	<view class="text-primary">我是一段文本</view>
</template>
```

<br />
<br />

### 使用 Mixins

在 <t-tag>style</t-tag> 标签下得重新引入库，就可以使用了。

<div class="text-primary"> 我是一段文本 </div>

```vue
<template>
	<view class="text">我是一段文本</view>
</template>

<style lang="less">
	/** 在style标签下得重新引入库 **/
	@import (reference) '@/uni_modules/tob-less/index.less';

	.text {
		.text-primary;
	}
</style>
```

:::warning reference 是必需的
这里相对于 App.vue 里的引入，需要加上 <t-tag color="warning">(reference)</t-tag>。

<p>
该标签可以让 <t-tag color="warning">less</t-tag> 编译成 <t-tag color="warning">css</t-tag> 时按需生成混入的代码，减小项目体积。
</p>
:::

<br />
<br />
<br />

## 教程 :saxophone:

:::tip 🤔 值得看吗?
该样式库其实是我的 <t-tag>Tailwind</t-tag> 常用样式集，在其规范基础上使用 <t-tag>less</t-tag> 重新编译了一套适合 uniapp 环境的样式，当然也做了一些好用的扩展。

你可以认为是 <t-tag>Tailwind</t-tag> 裁切后的 uniapp 版样式库 💪

以下会讲解一些常用的使用方式，当然你熟悉 css，可以直接看源码，会比看该教程更快
:::

<br />
<br />

### 颜色

颜色分为三大部分:

- 背景色 bg
- 文字色 text
- 边框色 border

#### 背景色

<t-tag v-for="v of colors" :key="v.type" :color="`text-white bg-${v.type}`" :light="false" class="m-1 mx-2 mt-4"> {{v.desc}} </t-tag>

```vue
<template>
	<view class="text-white">
		<text class="bg-primary">主要</text>
		<text class="bg-secondary">次要</text>
		<text class="bg-accent">强调</text>
		<text class="bg-neutral">中和</text>
		<text class="bg-base">基础</text>
		<text class="bg-info">信息</text>
		<text class="bg-success">成功</text>
		<text class="bg-warning">警告</text>
		<text class="bg-error">错误</text>
	</view>
</template>
```

<br />

#### 文字色

<t-tag v-for="v of colors" :key="v.type" :color="`text-${v.type}`" :light="false" class="m-1 mt-4"> {{v.desc}} </t-tag>

```vue
<template>
	<view>
		<text class="text-primary">主要</text>
		<text class="text-secondary">次要</text>
		<text class="text-accent">强调</text>
		<text class="text-neutral">中和</text>
		<text class="text-base">基础</text>
		<text class="text-info">信息</text>
		<text class="text-success">成功</text>
		<text class="text-warning">警告</text>
		<text class="text-error">错误</text>
	</view>
</template>
```

<br />

#### 边框色

<t-tag v-for="v of colors" :key="v.type" :color="`border border-${v.type}`" :light="false" class="m-1 mt-4"> {{v.desc}} </t-tag>

```vue
<template>
	<view>
		<text class="border border-primary">主要</text>
		<text class="border border-secondary">次要</text>
		<text class="border border-accent">强调</text>
		<text class="border border-neutral">中和</text>
		<text class="border border-base">基础</text>
		<text class="border border-info">信息</text>
		<text class="border border-success">成功</text>
		<text class="border border-warning">警告</text>
		<text class="border border-error">错误</text>
	</view>
</template>
```

当然你也可以给这些颜色加上后缀 `focus`，选择更深一点的颜色。  

例如 `bg-primary-focus` 比 `bg-primary` 颜色更深。`text-info-focus` 会比 `text-info` 颜色更深。

<br />
<br />

#### 颜色不透明度

当然还可以分开调整各个颜色的不透明度。

- 背景色不透明度  `bg-opacity`
- 文字色不透明度  `text-opacity`
- 边框色不透明度  `border-opacity`

支持 0 到 100%的不透明度，默认为 100%。

:point_down: 以下示例将以 <t-tag :light="false">主色 primary</t-tag> 作为示例，其他颜色也是相同的用法。

##### 背景色不透明度

<t-tag v-for="v of range" :key="v" :color="`bg-opacity-${v} bg-primary`" :light="false" class="m-1 mt-4"> {{v}}% </t-tag>

```vue
<template>
	<view>
		<text class="bg-primary bg-opacity-0">0%</text>
		<text class="bg-primary bg-opacity-10">10%</text>
		<text class="bg-primary bg-opacity-20">20%</text>
		<text class="bg-primary bg-opacity-30">30%</text>
		<text class="bg-primary bg-opacity-40">40%</text>
		<text class="bg-primary bg-opacity-50">50%</text>
		<text class="bg-primary bg-opacity-60">60%</text>
		<text class="bg-primary bg-opacity-70">70%</text>
		<text class="bg-primary bg-opacity-80">80%</text>
		<text class="bg-primary bg-opacity-90">90%</text>
		<text class="bg-primary bg-opacity-100">100%</text>
	</view>
</template>
```

<br />

##### 文字色不透明度

<t-tag v-for="v of range" :key="v" :color="`text-opacity-${v} text-primary`" :light="false" class="m-1 mt-4"> {{v}}% </t-tag>

```vue
<template>
	<view>
		<text class="text-primary text-opacity-0">0%</text>
		<text class="text-primary text-opacity-10">10%</text>
		<text class="text-primary text-opacity-20">20%</text>
		<text class="text-primary text-opacity-30">30%</text>
		<text class="text-primary text-opacity-40">40%</text>
		<text class="text-primary text-opacity-50">50%</text>
		<text class="text-primary text-opacity-60">60%</text>
		<text class="text-primary text-opacity-70">70%</text>
		<text class="text-primary text-opacity-80">80%</text>
		<text class="text-primary text-opacity-90">90%</text>
		<text class="text-primary text-opacity-100">100%</text>
	</view>
</template>
```

<br />

##### 边框不透明度

<t-tag v-for="v of range" :key="v" :color="`border border-opacity-${v} border-primary`" :light="false" class="m-1 mt-4"> {{v}}% </t-tag>

```vue
<template>
	<view>
		<text class="border border-primary border-opacity-0">0%</text>
		<text class="border border-primary border-opacity-10">10%</text>
		<text class="border border-primary border-opacity-20">20%</text>
		<text class="border border-primary border-opacity-30">30%</text>
		<text class="border border-primary border-opacity-40">40%</text>
		<text class="border border-primary border-opacity-50">50%</text>
		<text class="border border-primary border-opacity-60">60%</text>
		<text class="border border-primary border-opacity-70">70%</text>
		<text class="border border-primary border-opacity-80">80%</text>
		<text class="border border-primary border-opacity-90">90%</text>
		<text class="border border-primary border-opacity-100">100%</text>
	</view>
</template>
```

:::warning 定位与不透明度
注意这里是不透明度，这意味着你在使用一些定位的时候，它是会被透过去的，这时你可以设置具体的颜色值来规避这种透过去的现象。
:::

<br />
<br />

#### 最佳实践

:::tip 好看的搭配
以下是我在实践中总结出的比较好看的颜色搭配，目前该颜色搭配也是 <t-tag>UI</t-tag> 的设计之一👍
:::

<br />

##### 原色

深背景色，白色文字

<t-tag v-for="v of colors" :key="v.type" :color="v.type" :light="false" class="m-1 mx-2 mt-4"> {{v.desc}} </t-tag>

```vue
<template>
	<view>
		<text class="bg-primary text-white">主要</text>
		<text class="bg-secondary text-white">次要</text>
		<text class="bg-accent text-white">强调</text>
		<text class="bg-neutral text-white">中和</text>
		<text class="bg-base text-white">基础</text>
		<text class="bg-info text-white">信息</text>
		<text class="bg-success text-white">成功</text>
		<text class="bg-warning text-white">警告</text>
		<text class="bg-error text-white">错误</text>
	</view>
</template>
```

<br />

##### 高亮

深色文字，浅背景色 (10%的不透明度)

<t-tag v-for="v of colors" :key="v.type" :color="v.type" class="m-1 mx-2 mt-4"> {{v.desc}} </t-tag>

```vue
<template>
	<view>
		<text class="bg-primary border-opacity-10 text-primary">主要</text>
		<text class="bg-secondary border-opacity-10 text-secondary">次要</text>
		<text class="bg-accent border-opacity-10 text-accent">强调</text>
		<text class="bg-neutral border-opacity-10 text-neutral">中和</text>
		<text class="bg-base border-opacity-10 text-base">基础</text>
		<text class="bg-info border-opacity-10 text-info">信息</text>
		<text class="bg-success border-opacity-10 text-success">成功</text>
		<text class="bg-warning border-opacity-10 text-warning">警告</text>
		<text class="bg-error border-opacity-10 text-error">错误</text>
	</view>
</template>
```

<br />

##### 轮廓

深色边框和深色文字，透明背景

<t-tag v-for="v of colors" :key="v.type" :color="v.type" outline class="m-1 mx-2 mt-4"> {{v.desc}} </t-tag>

```vue
<template>
	<view>
		<text class="bg-transparent border border-primary text-primary"></text>主要</text>
		<text class="bg-transparent border border-secondary text-secondary">次要</text>
		<text class="bg-transparent border border-accent text-accent">强调</text>
		<text class="bg-transparent border border-neutral text-neutral">中和</text>
		<text class="bg-transparent border border-base text-base">基础</text>
		<text class="bg-transparent border border-info text-base">信息</text>
		<text class="bg-transparent border border-success text-success">成功</text>
		<text class="bg-transparent border border-warning text-warning">警告</text>
		<text class="bg-transparent border border-error text-error">错误</text>
	</view>
</template>
```

<br />
<br />
<br />

### 圆角

<t-tag v-for="v of roundeds" size="lg" :key="v.type" color="border" outline :rounded="v.type" class="m-1 mx-2 mt-4"> {{v.desc}} </t-tag>

```vue
<template>
	<view>
		<text class="border rounded-full">圆</text>
		<text class="border rounded-3xl">无敌大</text>
		<text class="border rounded-2xl">超级大</text>
		<text class="border rounded-xl">超大</text>
		<text class="border rounded-lg">大</text>
		<text class="border rounded-md">中</text>
		<text class="border rounded">基础</text>
		<text class="border rounded-sm">小</text>
		<text class="border rounded-none">无</text>
	</view>
</template>
```

:::warning
这个示例中的 <t-tag color="warning">border</t-tag> 其实是不需要的，加上只是为了突出圆角的效果。
:::

<br />
<br />
<br />

### 阴影

<t-tag v-for="v of shadows" size="lg" :key="v.type" color=" " :shadow="v.type" class="m-1 mx-2 mt-4"> {{v.desc}} </t-tag>

```vue
<template>
	<view>
		<text class="shadow-xl">超大</text>
		<text class="shadow-lg">大</text>
		<text class="shadow-md">中</text>
		<text class="shadow">基础</text>
		<text class="shadow-sm">小</text>
		<text class="shadow-none">无</text>
	</view>
</template>
```

<br />
<br />
<br />

### 尺寸

尺寸包含以下类型

- 宽度 w
- 高度 h
- 内边距 p
- 外边距 m

#### 范围

尺寸的范围是 0 到 750rpx，分为 75 份，每份 10rpx。  

例如 <t-tag>w-9</t-tag> 表示宽度 90rpx，<t-tag>h-5</t-tag> 表示高度 50rpx。

<div class="bg-accent rounded h-5 w-9" />

```vue
<template>
	<!-- 表示高50rpx，宽90rpx的块 -->
	<view class="bg-accent rounded h-5 w-9"></view>
</template>
```

<br />

#### full 和 screen

除此之外，宽和高还有 <t-tag>full</t-tag> 和 <t-tag>screen</t-tag> 两个尺寸。
<t-tag>full</t-tag>表示 100%，而 <t-tag>screen</t-tag> 表示 100vh。

例如 <t-tag>w-full</t-tag> 表示宽度 100%，<t-tag>h-screen</t-tag> 表示高度 100vh。

<br />

#### 内外边距

由于边距有上下左右之分，所以除了用 <t-tag>p-3</t-tag> 这种表示上下左右内边距为 30rpx 之外，还可以加小前缀。小前缀可选值如下:

- l 左 👈
- r 右 👉
- t 上 👆
- b 下 👇

例如 <t-tag>pt-2</t-tag> 表示上内边距为 20rpx，<t-tag>mb-8</t-tag> 表示下外边距 80rpx。

<div class="bg-accent rounded h-5 text-white pt-2 pl-3 w-9">1</div>

```vue
<template>
	<!-- 表示高50rpx，宽90rpx的块，上内边距20rpx，左内边30rpx -->
	<view class="bg-accent rounded h-5 text-white pt-2 pl-3 w-9">1</view
	>
</template>
```




<br />
<br />
<br />

### 字重

<p>
  即 <t-tag>font-weight</t-tag>，可选值如下
</p>

- 100 font-thin
- 200 font-extralight
- 300 font-light
- 400 font-normal
- 500 font-medium
- 600 font-semibold
- 700 font-bold
- 800 font-extrabold
- 900 font-black

<div class="flex flex-wrap">
	<span v-for="v of fonts" class="m-2" :class="`font-${v}`"> {{v}} </span>
</div>

```vue
<template>
	<view>
		<text class="font-thin">thin</text>
		<text class="font-extralight">extralight</text>
		<text class="font-light">light</text>
		<text class="font-normal">normal</text>
		<text class="font-medium">medium</text>
		<text class="font-semibold">semibold</text>
		<text class="font-bold">bold</text>
		<text class="font-extrabold">extrabold</text>
		<text class="font-black">black</text>
	</view>
</template>
```

<br />
<br />

### 字体尺寸

<div class="flex flex-wrap items-center">
	<div v-for="v of textSizes" :key="v" class="mr-2" :class="`text-${v}`"> {{v}} </div>
</div>

```vue
<template>
	<view>
		<text class="text-xs">xs</text>
		<text class="text-sm">sm</text>
		<text class="text-md">md</text>
		<text class="text-lg">lg</text>
		<text class="text-xl">xl</text>
		<text class="text-2xl">2xl</text>
		<text class="text-3xl">3xl</text>
		<text class="text-4xl">4xl</text>
		<text class="text-5xl">5xl</text>
		<text class="text-6xl">6xl</text>
		<text class="text-7xl">7xl</text>
		<text class="text-8xl">8xl</text>
		<text class="text-9xl">9xl</text>
	</view>
</template>
```

<br />
<br />
<br />

### 文本方向

<br />

<div class="text-left">text-left</div>
<div class="text-center">text-center</div>
<div class="text-right">text-right</div>

```vue
<template>
	<view>
		<view class="text-left">text-left</view>
		<view class="text-center">text-center</view>
		<view class="text-right">text-right</view>
	</view>
</template>
```

<br />
<br />
<br />


### 文本装饰

<br />

<span class="underline">underline</span>
<span class="mx-5 line-through">line-through</span>
<span class="no-underline">no-underline</span>

```vue
<template>
	<view>
		<text class="underline">underline</text>
		<text class="mx-5 line-through">line-through</text>
		<text class="no-underline">no-underline</text>
	</view>
</template>
```
<br />
<br />
<br />

### 文本大写

<br />

<span class="uppercase">Uppercase</span>
<span class="mx-5 lowercase">LOWERCASE</span>
<span class="mr-5 capitalize">Capitalize</span>
<span class="normal-case">normal-case</span>

```vue
<template>
	<view>
		<text class="uppercase">Uppercase</text>
		<text class="mx-5 lowercase">LOWERCASE</text>
		<text class="mr-5 capitalize">Capitalize</text>
		<text class="normal-case">normal-case</text>
	</view>
</template>
```

<br />
<br />
<br />




### 不透明度

<div class="flex flex-wrap  mt-2">
    <span class="block-1" v-for="v of range" :key="v" :class="`opacity-${v}`">{{v}}%</span>
</div>

```vue
<template>
	<view class="flex">
		<text class="opacity-0 block-1">0%</text>
		<text class="opacity-10 block-1">10%</text>
		<text class="opacity-20 block-1">20%</text>
		<text class="opacity-30 block-1">30%</text>
		<text class="opacity-40 block-1">40%</text>
		<text class="opacity-50 block-1">50%</text>
		<text class="opacity-60 block-1">60%</text>
		<text class="opacity-70 block-1">70%</text>
		<text class="opacity-80 block-1">80%</text>
		<text class="opacity-90 block-1">90%</text>
		<text class="opacity-100 block-1">100%</text>
	</view>
</template>

<style scoped lang="less">
	@import (reference) '@/uni_modules/tob-less/index.less';
	/** 块 **/
	.block-1 {
		.w-9;
		.h-6;
		.mr-3;
		.my-1;
		.rounded;
		.bg-accent;
		.bg-opacity-100;
	}
</style>
```

<br />
<br />
<br />

### Flex 布局

:::tip 无法穷尽
由于 <t-tag>flex</t-tag> 布局太灵活了，这里只能通过列举常见的用例来带领大家快速了解。
:::

#### display

直接在容器上设置 `flex` 即可

 <div class="flex mt-5">
    <div class="block-1" />
    <div class="block-1" />
    <div class="block-1" />
    <div class="block-1" />
 </div>

```vue
<template>
	<view class="flex">
		<view class="block-1" />
		<view class="block-1" />
		<view class="block-1" />
		<view class="block-1" />
	</view>
</template>

<style scoped lang="less">
	@import (reference) '@/uni_modules/tob-less/index.less';
	/** 块 **/
	.block-1 {
		.w-9;
		.h-6;
		.mr-3;
		.my-1;
		.rounded;
		.bg-accent;
		.bg-opacity-100;
	}
</style>
```

<br />

#### 主轴对齐

- justify-end 尾部
- justify-start 头部
- justify-evenly 等距
- justify-center 居中
- justify-around 等比
- justify-between 靠两头

<div v-for="v of justifys" :key="v" class="container flex" :class="`justify-${v}`">
  <div class="block-1" />
  <div class="block-1" />
  <div class="block-1" />
  <div class="block-1" />
</div>

```vue
<template>
	<view>
		<!-- 居中对齐 -->
		<view class="container flex justify-center">
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
		</view>

		<!-- 等距对齐 -->
		<view class="container flex justify-evenly">
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
		</view>

		<!-- 等比对齐 -->
		<view class="container flex justify-around">
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
		</view>

		<!-- 靠两头对齐 -->
		<view class="container flex justify-between">
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
		</view>

		<!-- 头部对齐 -->
		<view class="container flex justify-start">
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
		</view>

		<!-- 尾部对齐 -->
		<view class="container flex justify-end">
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
			<view class="block-1" />
		</view>
	</view>
</template>

<style scoped lang="less">
	@import (reference) '@/uni_modules/tob-less/index.less';
	/** 块 **/
	.block-1 {
		.w-9;
		.h-6;
		.mr-3;
		.my-1;
		.rounded;
		.bg-accent;
		.bg-opacity-100;
	}
	/** 容器**/
	.container {
		.px-3;
		.py-2;
		.mt-4;
		.bg-accent;
		.rounded-lg;
		.bg-opacity-10;
	}
</style>
```

<br />
<br />

#### 交叉轴

- items-center 居中
- items-flex-end 头部
- items-flex-start 尾部
- items-baseline 文字基线对齐
- items-stretch 填充整个容器高度

<div class="container flex items-center">
    <div class="h-3 block-common" />
    <div class="h-4 block-common" />
    <div class="h-5 block-common" />
    <div class="h-6 block-common" />
</div>

<div class="container flex items-stretch">
    <div class="h-6 block-common" />
    <div class="block-common" />
    <div class="block-common" />
    <div class="block-common" />
</div>

<div class="container flex items-baseline">
    <div class="h-3 block-common" />
    <div class="h-4 block-common" />
    <div class="h-5 block-common" />
    <div class="h-6 block-common" />
</div>

<div class="container flex items-flex-start">
    <div class="h-3 block-common" />
    <div class="h-4 block-common" />
    <div class="h-5 block-common" />
    <div class="h-6 block-common" />
</div>

<div class="container flex items-flex-end">
    <div class="h-3 block-common" />
    <div class="h-4 block-common" />
    <div class="h-5 block-common" />
    <div class="h-6 block-common" />
</div>

```vue
<template>
	<view>
		<!-- 居中对齐 -->
		<view class="container flex items-center">
			<view class="h-3 block-common" />
			<view class="h-4 block-common" />
			<view class="h-5 block-common" />
			<view class="h-6 block-common" />
		</view>

		<!-- 填充整个容器高度，注意是容器高度 -->
		<view class="container flex items-stretch">
			<view class="h-6 block-common" />
			<view class="block-common" />
			<view class="block-common" />
			<view class="block-common" />
		</view>

		<!-- 文字基线对齐 -->
		<view class="container flex items-baseline">
			<view class="h-3 block-common" />
			<view class="h-4 block-common" />
			<view class="h-5 block-common" />
			<view class="h-6 block-common" />
		</view>

		<!-- 头部对齐 -->
		<view class="container flex items-flex-start">
			<view class="h-3 block-common" />
			<view class="h-4 block-common" />
			<view class="h-5 block-common" />
			<view class="h-6 block-common" />
		</view>

		<!-- 尾部对齐 -->
		<view class="container flex items-flex-end">
			<view class="h-3 block-common" />
			<view class="h-4 block-common" />
			<view class="h-5 block-common" />
			<view class="h-6 block-common" />
		</view>
	</view>
</template>

<style scoped lang="less">
	@import (reference) '@/uni_modules/tob-less/index.less';

	/** 块 **/
	.block-common {
		.mr-3;
		.my-1;
		.flex-1;
		.rounded;
		.bg-accent;
		.bg-opacity-100;
	}

	/** 容器**/
	.container {
		.px-3;
		.py-2;
		.mt-4;
		.bg-accent;
		.rounded-lg;
		.bg-opacity-10;
	}
</style>
```

<br />
<br />

#### 方向

- flex-row 横排
- flex-col 竖排
- flex-row-reverse 反向横排
- flex-col-reverse 反向竖排

<div class="container flex" v-for="v of directions" :key="v" :class="v">
  <div class="block-1">1</div>
  <div class="block-1">2</div>
  <div class="block-1">3</div>
  <div class="block-1">4</div>
</div>

```vue
<template>
	<view>
		<!-- 横排 -->
		<view class="container flex flex-row">
			<view class="block-1">1</view>
			<view class="block-1">2</view>
			<view class="block-1">3</view>
			<view class="block-1">4</view>
		</view>

		<!-- 竖排 -->
		<view class="container flex flex-col">
			<view class="block-1">1</view>
			<view class="block-1">2</view>
			<view class="block-1">3</view>
			<view class="block-1">4</view>
		</view>

		<!-- 反向横排 -->
		<view class="container flex flex-row-reverse">
			<view class="block-1">1</view>
			<view class="block-1">2</view>
			<view class="block-1">3</view>
			<view class="block-1">4</view>
		</view>

		<!-- 反向竖排 -->
		<view class="container flex flex-col-reverse">
			<view class="block-1">1</view>
			<view class="block-1">2</view>
			<view class="block-1">3</view>
			<view class="block-1">4</view>
		</view>
	</view>
</template>

<style scoped lang="less">
	@import (reference) '@/uni_modules/tob-less/index.less';
	/** 块 **/
	.block-1 {
		.w-9;
		.h-6;
		.mr-3;
		.my-1;
		.flex;
		.rounded;
		.bg-accent;
		.text-white;
		.items-center;
		.justify-center;
		.bg-opacity-100;
	}
	/** 容器**/
	.container {
		.px-3;
		.py-2;
		.mt-4;
		.bg-accent;
		.rounded-lg;
		.bg-opacity-10;
	}
</style>
```

<br />
<br />
<br />

### 自定义主题

<br />

#### 什么时候应该用?

- 需要强调产品的品牌色
- 内置的颜色不符合你的审美

<br />

#### 如何使用?

<br />

##### 全局主题

直接在 <t-tag>App.vue</t-tag> 下 Mixins 一个 <t-tag>AppColors</t-tag> 后按需修改的颜色既可

```vue
<!-- App.vue -->
<style lang="less">
	@import '@/uni_modules/tob-less/index.less';

	.AppColors({
		/* 品牌色 */
		primary: #570df8;   /* 主要 */
		secondary: #f000b8; /* 次要 */
		accent: #37cdbe;    /* 强调 */
		neutral: #3d4451;   /* 中和 */
		base: #7f899a;      /* 基础 */

		/* 通用色 */
		info: #3b82f6;    /* 信息 */
		success: #10b981; /* 成功 */
		warning: #f59e0b; /* 警告 */
		error: #ef4444;   /* 错误 */

		/* 点击时，品牌色 */
		primary-focus: #4406cb;    /* 主要 */
		secondary-focus: #bd0091;  /* 次要 */
		accent-focus: #2aa79b;     /* 强调 */
		neutral-focus: #2a2e37;    /* 中和 */
		base-focus: #656f7f;       /* 基础 */

		/* 点击时，通用色 */
		info-focus: #2563eb;     /* 信息 */
		success-focus: #059669;  /* 成功 */
		warning-focus: #d97706;  /* 警告 */
		error-focus: #dc2626;    /* 错误 */

		/* 白色 */
		white: #ffffff;
	});
</style>
```

:::warning 注意事项
在 <t-tag color="warning"> less </t-tag> 全局的 <t-tag color="warning">Mixins</t-tag> 是一定要加分号的。请确保你的分号没有被遗漏。
:::

<br />
<br />

##### 局部主题

有时候 <t-tag>App</t-tag> 需要加入第三方品牌的展示，而第三方品牌需要有属于自己的品牌色。  
这时就需要用到局部主题。

例如我们的品牌 A 用的是全局的蓝色，而第三方品牌 B 是红色。这时就需要有局部的主题配置。

```vue
<!-- App.vue -->
<style lang="less">
	@import '@/uni_modules/tob-less/index.less';

	/* 我们的全局 A 品牌色 */
	.AppColors({
		primary: blue;   /* 主要 */
		/* ...此处省略其他配色 */
	});

	/* B品牌的配色 */
	.theme-B {
		/* 提供配色依赖 */
		.ProvideColors({ 
			primary: red; /* 主要 */
			/* ...此处省略其他配色，配色配置同全局一样 */
		});
	}
</style>
```

接着在需要展示第三方品牌的页面根节点上通过 class 注入即可

```vue
<!-- 展示第三方品牌 page -->
<template>
	<!-- 注入第三方品牌 B 的配色 -->
	<view class="theme-B">
		<!-- 此处省略各种第三方品牌的东西 -->
	</view>
</template>
```

<br />
<br />

##### 动态主题

如果你非常细心的话，就会发现上边注入主题时其实是一个 class。  
那么只需要定义多个局部的主题，根据需要动态赋值即可 🤔

```vue
<!-- App.vue -->
<style lang="less">
	@import '@/uni_modules/tob-less/index.less';

	/* 全局 兜底 品牌色 */
	.AppColors({
		primary: blue;   /* 主要 */
		/* ...此处省略其他配色 */
	});

	/* B的配色 */
	.theme-B {
		.ProvideColors({ 
			primary: red; /* 主要 */
			/* ...此处省略其他配色，配色配置同全局一样 */
		});
	}

	/* C的配色 */
	.theme-C {
		.ProvideColors({ 
			primary: yellow; /* 主要 */
			/* ...此处省略其他配色，配色配置同全局一样 */
		});
	}
</style>
```

在需要的页面上，注入并按需修改即可。

<div class="cursor-pointer text-primary" @click="toggleTheme()" :class="Theme"> 我是主色调 </div>

```vue
<!-- pgae -->
<template>
	<view :class="[AppTheme]">
		<view class="text-primary" @click="ToggleTheme">
			我是主色调
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				AppTheme: 'theme-B'
			}
		},
		methods: {
			ToggleTheme() {
				this.Theme === 'theme-B' ? 'theme-C' : 'theme-B'
			}
		}
	}
</script>
```

但上边的切换并不是全局的。

所以我实现了一个简单的全局主题状态管理用来实现全局动态切换。

首先要在 <t-tag>main.js</t-tag> 中安装了 <t-tag>tob-less</t-tag>。

```js{4-6,12-14,27-29}
// main.js
import App from './App'

// 引入 tob-less
import setupTobLess from '@/uni_modules/tob-less/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

// 注意是 Vue
setupTobLess(Vue)

const app = new Vue({
	...App
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
	const app = createSSRApp(App)

	// 注意是 app，不是 Vue
	setupTobLess(app)

	return {
		app
	}
}
// #endif
```

然后为了规范主题的 class 命名，我限制了主题的前缀为 <t-tag> theme </t-tag>。

这意味着你在定义动态主题时，必须以 <t-tag> theme </t-tag> 作为 <t-tag>class</t-tag> 的前缀。

👇 例如下边的示例

```vue{5-6,12-13,19-20}
<!-- App.vue -->
<style lang="less">
	@import '@/uni_modules/tob-less/index.less';

	/* 包含前缀 theme */
	.theme-B {
		.ProvideColors({
			primary: red; /* 主要 */
		});
	}

	/* 包含前缀 theme */
	.theme-C {
		.ProvideColors({
			primary: yellow; /* 主要 */
		});
	}

	/* 未包含前缀 theme，非法的主题命名😭 */
	.D {
		.ProvideColors({
			primary: green; /* 主要 */
		});
	}
</style>
```

接下来就可以在需要的页面中直接注入并按需切换就可以了，这里提供一个状态和一个方法。

- AppTheme 全局的主题状态
- ToggleAppTheme 切换主题状态，设置空字符串将重置到全局主题。

<div class="cursor-pointer text-primary" @click="ToggleAppTheme('B')" :class="AppTheme"> 我是B页面 </div>

<div class="cursor-pointer mt-2 text-primary" @click="ToggleAppTheme('C')" :class="AppTheme"> 我是C页面 </div>

```vue
<!-- 页面 B -->
<template>
	<!-- ToggleAppTheme('B') 将使得 AppTheme 改变为 theme-B -->
	<view :class="[AppTheme]" @click="ToggleAppTheme('B')">
		<view class="text-primary">我是B页面</view>
	</view>
</template>
```

```vue
<!-- 页面 C -->
<template>
	<!-- ToggleAppTheme('C') 将使得 AppTheme 改变为 theme-C -->
	<view :class="[AppTheme]" @click="ToggleAppTheme('C')">
		<view class="text-primary">我是C页面</view>
	</view>
</template>
```

:::warning 一定要放在 App.vue 下吗?
全局主题和动态主题是一定要在 <t-tag color="warning">App.vue</t-tag> 下的，但局部主题其实是可以放在具体的页面下。

<p>
	不过为了统一的管理主题，强烈推荐还是放在 <t-tag color="warning">App.vue</t-tag> 下。
</p>
:::

<br />
<br />

## 启发 :nerd_face:

该库受以下技术启发

- [Less](https://less.bootcss.com/)
- [Css 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
- [Windicss](https://cn.windicss.org/)
- [Tailwindcss](https://www.tailwindcss.cn/)

