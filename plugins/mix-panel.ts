import mixpanel from 'mixpanel-browser';
import Vue, {ObjectDirective} from 'vue'

const directive: ObjectDirective = {

  bind(el, binding, vnode, prevVNode) {

    const action = el.getAttribute('data-mp-action');
    if (binding.arg === 'click') {
      el.addEventListener('click', () => {
        mixpanel.track(binding.arg, {
            action,
            ...binding.value
          }
        );
      })
    }
  },

}

const plugin = {
  install(app: typeof Vue, options: any) {
    mixpanel.init('0fa75554f665bffbe6825d1f48851852', {debug: true});
    app.directive('track', directive)
  }

}


Vue.use(plugin);
