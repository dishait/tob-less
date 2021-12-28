<template>
  <span class="t-tag" :class="[Color, Rounded, Shadow, Size]">
    <slot />
  </span>
</template>

<script>
import { Size, Color, Shadow, Rounded } from '../core'

/**
 * Tag 标签
 * @description 标签组件
 * @tutorial TODO 文档
 *
 * @property {Boolean} light = [true|false] 高亮，默认为false
 * @property {Boolean} outline = [true|false] 轮廓，默认为false
 * @property {Boolean} closeable = [true|false] 可关闭，默认为false
 *
 * @property {String} leftIcon 左图标
 * @property {String} rightIcon 右图标
 * @property {String} closeIcon = [close-circle|close|...] 可关闭，默认为false
 *
 * @property {String} shadow = [none|sm|base|md|lg|xl|...] 阴影，默认为none
 *
 * 	@value none 无
 * 	@value sm 小
 * 	@value base 基础
 * 	@value md 中
 * 	@value lg 大
 * 	@value xl 超大
 *
 * @property {String} rounded = [none|sm|base|md|lg|xl|2xl|3xl|full|...] 圆角，默认为base
 *
 * 	@value none 无
 * 	@value sm 小
 * 	@value base 基础
 * 	@value md 中
 * 	@value lg 大
 * 	@value xl 超大
 * 	@value 2xl 超级大
 * 	@value 3xl 无敌大
 * 	@value full 圆
 *
 * @property {String} color = [primary|secondary|accent|neutral|info|success|warning|error|...] 颜色，默认为base
 *
 * 	@value primary 主要
 * 	@value secondary 次要
 * 	@value accent 强调
 * 	@value neutral 中和
 * 	@value base 基础
 *
 * 	@value info 信息
 * 	@value success 成功
 * 	@value warning 警告
 * 	@value error 错误
 *
 * @property {String} size = [xs|sm|md|lg|...] 尺寸，默认为md
 *
 * 	@value xs 超小
 * 	@value sm 小
 *  @value md 中
 * 	@value lg 大
 *
 * @event {Function} click 点击事件
 */
export default {
  mixins: [
    Shadow(),
    Rounded({ rounded: 'base' }),
    Color({ color: 'primary', light: true }),
    Size({
      presets: {
        xs: 'px-1 h-4 text-xs', // 超小
        sm: 'px-2 h-4 text-sm', // 小
        md: 'px-2 h-5 text-md', // 中
        lg: 'px-2 h-6 text-lg', // 大
      },
    }),
  ],
}
</script>

<style scoped lang="less">
@import (reference, less) "../custom.less";

.t-tag {
  .inline-flex;
  .items-center;
}
</style>
