const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const msg = ref("Bataman");
    const autor = ref("Yo");

    const changeName = () => {
      msg.value = "Cambió";
      autor.value = "Cambió;";
    };

    setTimeout(() => {
      msg.value = "Superman";
      autor.value = "Ana";
    }, 1800);

    return {
      autor,
      msg,
      changeName,
    };
  },
});

app.mount("#myApp");
