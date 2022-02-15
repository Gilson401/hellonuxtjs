<template>
  <button
    :type="nativeType"
    :disabled="loading"
    :class="[classes, customClass]"
    @click="$emit('click')"
  >
    <Fa v-if="loading" icon="spinner" class="w-5 h-5 mr-3 animate-spin" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
      validator (str) {
        return [
          'primary',
          'success',
          'info',
          'warning',
          'danger',
          'default',
          'white',
          'none'
        ].includes(str)
      }
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'md',
      validator (str) {
        return ['sm', 'xs', 'md', 'lg', 'xl'].includes(str)
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: String,
      default: 'xs',
      validator (str) {
        return [
          'none',
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '3xl',
          'full'
        ].includes(str)
      }
    },
    expanded: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: [String, Array],
      default: ''
    }
  },

  data () {
    return {
      classes: [
        'border',
        'inline-flex',
        'items-center',
        'justify-center',
        'font-bold',
        'box-border',
        'transition-colors',
        'duration-300'
      ]
    }
  },

  created () {
    // Expanded prop
    if (this.expanded) { this.classes.push('w-full') }

    // Type prop
    switch (this.type) {
      case 'primary':
        this.classes.push(
      
          'hover:text-white',
         
         
        )
        if (this.outline) {
          this.classes.push('text-brand')
        } else {
          this.classes.push('text-white')
        }
        break

      case 'success':
        this.classes.push('border-accent')
        if (this.outline) {
          this.classes.push(
            'text-accent',
            'hover:text-white',
          
          )
        } else {
          this.classes.push(
            'text-white',
            'bg-accent',
            'hover:bg-green-600',
            'hover:border-green-600'
          )
        }
        break

      case 'info':
        this.classes.push('border-blue-500')
        if (this.outline) {
          this.classes.push(
            'text-blue-500',
            'hover:text-white',
            'hover:bg-blue-500'
          )
        } else {
          this.classes.push(
            'text-white',
            'bg-blue-500',
            'hover:bg-blue-600',
            'hover:border-blue-600'
          )
        }
        break

      case 'warning':
        this.classes.push('border-yellow-400')
        if (this.outline) {
          this.classes.push(
            'text-yellow-400',
            'hover:text-white',
            'hover:bg-yellow-400'
          )
        } else {
          this.classes.push(
            'text-white',
            'bg-yellow-400',
            'hover:bg-yellow-500',
            'hover:border-yellow-500'
          )
        }
        break

      case 'danger':
        this.classes.push('border-red-500')
        if (this.outline) {
          this.classes.push(
            'text-red-500',
            'hover:text-white',
            'hover:bg-red-500'
          )
        } else {
          this.classes.push(
            'text-white',
            'bg-red-500',
            'hover:bg-red-600',
            'hover:border-red-600'
          )
        }
        break

      case 'white':
        this.classes.push('border-white')
        this.classes.push(
          'text-blue-500',
          'bg-white',
          'hover:bg-gray-100',
          'hover:border-gray-200'
        )
        break

      case 'none':
        this.classes.push('text-blue-500')
        break

      case 'default':
      default:
        this.classes.push('hover:bg-gray-100', 'hover:text-gray-700')
        if (this.outline) {
          this.classes.push(
            'text-white',
            'border-gray-300',
            'hover:border-gray-100'
          )
        } else {
          this.classes.push(
            'bg-white',
            'text-gray-600',
            'border-gray-500',
            'hover:border-gray-700'
          )
        }
        break
    }

    // Size prop
    switch (this.size) {
      case 'xs':
        this.classes.push('px-2', 'py-1', 'text-xs')
        break
      case 'sm':
        this.classes.push('px-2', 'py-1', 'text-sm')
        break
      case 'lg':
        this.classes.push('px-4', 'py-2', 'text-2xl')
        break
      case 'xl':
        this.classes.push('px-6', 'py-3', 'text-3xl')
        break
      case 'md':
      default:
        this.classes.push('px-4', 'py-2')
        break
    }

    // Rounded prop
    if (this.rounded) { this.classes.push(`rounded-${this.rounded}`) }
  }
}
</script>
