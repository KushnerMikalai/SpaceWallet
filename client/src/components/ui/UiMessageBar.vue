<template>
  <div class="ui-message-box" :class="typeClass">
    <div class="ui-message-box__content">
      <UiIcon v-if="icon" class="ui-message-box__icon" :icon="icon" />
      <div class="ui-message-box__text" v-html="text"></div>
      <div class="ui-message-box__dismiss" @click="handleClose">
        <button class="ui-message-box__cancel-button">
          <UiIcon v-if="close" class="ui-message-box__cancel" :icon="'Cancel'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import UiIcon from './UiIcon.vue'

interface UiMessageBarProps {
  text: string
  type: string
  close: boolean
  id: string
}

const iconsMaps: any = {
  info: 'Info',
  error: 'ErrorBadge',
  blocked: 'Blocked2',
  severeWarning: 'Warning',
  warning: 'Warning',
  success: 'Completed'
}

export default defineComponent({
  name: 'UiMessageBox',
  components: {
    UiIcon
  },
  props: {
    id: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: 'info'
    },
    type: {
      // info, error, blocked, severeWarning, warning, success,
      type: String,
      default: ''
    },
    close: Boolean
  },
  setup(props: UiMessageBarProps, ctx) {
    const handleClose = () => {
      ctx.emit('close', props.id)
    }

    return {
      icon: computed(() => iconsMaps[props.type]),
      typeClass: computed(() => `ui-message-box_${props.type}`),
      handleClose
    }
  }
})
</script>

<style scoped>
.ui-message-box {
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  background: rgb(253, 231, 233);
  color: rgb(50, 49, 48);
  min-height: 32px;
  width: 100%;
  display: flex;
  word-break: break-word;
}

.ui-message-box__icon {
  font-size: 16px;
  min-width: 16px;
  min-height: 16px;
  display: flex;
  flex-shrink: 0;
  margin: 8px 0px 8px 12px;
}

.ui-message-box__content {
  display: flex;
  width: 100%;
  line-height: normal;
}

.ui-message-box__text {
  min-width: 0px;
  display: flex;
  flex-grow: 1;
  margin: 8px;
  -webkit-font-smoothing: antialiased;
  font-size: 12px;
  font-weight: 400;
}

.ui-message-box__cancel-button {
  outline: transparent;
  position: relative;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;
  border: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  background-color: transparent;
  flex-shrink: 0;
  user-select: none;
}

.ui-message-box__cancel-button:hover .ui-message-box__cancel {
  color: var(--themePrimary);
}

.ui-message-box__cancel {
  font-size: 10px;
  height: 10px;
  line-height: 10px;
  color: rgb(50, 49, 48);
}

.ui-message-box_blocked,
.ui-message-box_error {
  background: rgb(253, 231, 233);
}
.ui-message-box_blocked .ui-message-box__icon,
.ui-message-box_error .ui-message-box__icon {
  color: rgb(168, 0, 0);
}

.ui-message-box_info {
  background: rgb(243, 242, 241);
}
.ui-message-box_info .ui-message-box__icon {
  color: rgb(96, 94, 92);
}

.ui-message-box_severeWarning {
  background: rgb(254, 217, 204);
}
.ui-message-box_severeWarning .ui-message-box__icon {
  color: rgb(216, 59, 1);
}

.ui-message-box_success {
  background: rgb(223, 246, 221);
}
.ui-message-box_success .ui-message-box__icon {
  color: rgb(16, 124, 16);
}

.ui-message-box_warning {
  background: rgb(255, 244, 206);
}
.ui-message-box_warning .ui-message-box__icon {
  color: rgb(121, 119, 117);
}
</style>
