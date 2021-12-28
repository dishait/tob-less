<script>
import { Color, Size, Rounded, Shadow } from '../core'
export default {
  mixins: [
    Shadow(),
    Color({ inject: 'btn' }),
    Rounded({ rounded: 'base' }),
    Size({
      presets: {
        xs: 'h-4 p-2 text-xs', // 超小
        sm: 'h-6 p-3 text-sm', // 小
        md: 'h-8 p-4 text-md', // 中
        lg: 'h-10 p-5 text-lg', // 大
      },
    }),
  ],
}
</script>

<template>
  <div class="t-btn" :class="[Color, Rounded, Size, Shadow]">
    <slot />
  </div>
</template>

<style scoped lang="less">
@import (reference, less) "../custom.less";

.t-btn {
  .inline-flex;
  .items-center;
  .justify-center;
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;
}

// 缩放动画
.t-btn:active:hover {
  transform: scale(0.85);
}

// 点击激活状态
.btn-active() {
  // 轮廓
  &.btn-outline {
    .text-white;
  }
  // 高亮
  &.btn-light {
    .text-white;
    .bg-opacity-100;
  }
  &.btn {
    // 主要
    &-primary {
      .bg-primary-focus;
    }
    // 次要
    &-secondary {
      .bg-secondary-focus;
    }
    // 强调
    &-accent {
      .bg-accent-focus;
    }
    // 中和
    &-neutral {
      .bg-neutral-focus;
    }
    // 基础
    &-base {
      .bg-base-focus;
    }
    // 信息
    &-info {
      .bg-info-focus;
    }
    // 成功
    &-success {
      .bg-success-focus;
    }
    // 警告
    &-warning {
      .bg-warning-focus;
    }
    // 错误
    &-error {
      .bg-error-focus;
    }
  }
}

// 幽灵激活状态
.btn-ghost-active() {
  .text-currentColor !important;
  background-color: rgba(209, 213, 219, 0.8) !important;
}

// 幽灵
.t-btn.btn-ghost {
  .bg-transparent;
  .text-currentColor;
  &:active {
    .btn-ghost-active();
  }
}

.btn {
  // 块级元素
  &-block {
    .flex;
    .w-full;
  }
  // 禁用
  &-disabled {
    .border-transparent;
    color: #acacac !important;
    transform: scale(1) !important;
    background-color: #f7f7f7 !important;
  }
}

@media screen and (min-width: 640px) {
  .t-btn:hover {
    .btn-active();
    cursor: pointer;
    user-select: none;
  }
  .t-btn.btn-ghost:hover {
    .btn-ghost-active();
  }
}

.t-btn:active {
  .btn-active();
}
</style>
