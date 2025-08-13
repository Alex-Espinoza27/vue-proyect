import {
  onMounted,
  defineComponent,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
  ref,
} from 'vue';

export default defineComponent({
  setup: () => {
    console.log('====== ciclos de vida ====== ');

    console.log('setup ');

    const counter = ref(0);

    onMounted(() => {
      console.log('onMounted'); // es el primero en ejecutarse
    });
    onUpdated(() => {
      console.log('onUpdated'); // se ejecuta cada vez que se actualiza el componente
    });
    onUnmounted(() => {
      console.log('onUnmounted'); // se ejecuta cuando se destruye el componente
    });
    onBeforeMount(() => {
      console.log('onBeforeMount'); // se ejecuta antes de que se monte el componente
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate'); // se ejecuta antes de que se actualice el componente
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount'); // se ejecuta antes de que se destruya el componente
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured'); // se ejecuta cuando se captura un error en el componente
    });
    onRenderTracked(() => {
      console.log('onRenderTracked'); // se ejecuta cuando se rastrea un renderizado
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered'); // se ejecuta cuando se activa un renderizado
    });
    onActivated(() => {
      console.log('onActivated'); // se ejecuta cuando se activa el componente
    });
    onDeactivated(() => {
      console.log('onDeactivated'); // se ejecuta cuando se desactiva el componente
    });
    onServerPrefetch(() => {
      console.log('onServerPrefetch'); // se ejecuta cuando se prefetch el componente en el servidor
    });

    return {
      counter,
    };
  },
});
