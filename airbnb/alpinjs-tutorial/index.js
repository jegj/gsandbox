document.addEventListener("alpine:init", () => {
  Alpine.data("counter", () => ({
    count: 0,
    name: "Javier",
    logCount() {
      console.log(this.count);
    },
  }));

  Alpine.data("signupForm", () => ({
    username: "",
    password: "",
    passwordConfirm: "",
    belt: "",
    bio: "",
    newsletter: true,
  }));
});
