// Quero abrir o modal quando clica no botão de notificação, cada clique abre um modal
// Depois quero fechar o modal quando clica no botão de fechar

const notificationButton = document.querySelector("#notification-button");
const notificationContainer = document.querySelector("#notification-container");

notificationButton.addEventListener("click", () => {
  notificationContainer.classList.add(
    "absolute",
    "top-0",
    "right-0",
    "pt-10",
    "pr-8",
    "flex",
    "flex-col",
    "gap-4",
    "z-50"
  );
  const newNotificationContainer = document.createElement("div");
  newNotificationContainer.classList.add(
    "relative",
    "rounded-3xl",
    "flex",
    "items-center",
    "bg-gray-900",
    "text-gray-200",
    "shadow-lg",
    "gap-4",
    "py-3",
    "px-4",
    "w-96",
    "mt-4"
  );
  notificationContainer.appendChild(newNotificationContainer);

  // Adicionando um id único para cada notificação
  const notificationId = `notification-${Date.now()}`;
  newNotificationContainer.setAttribute("id", notificationId);
  newNotificationContainer.innerHTML = `<img
          height="56px"
          width="56px"
          src="https://i.pravatar.cc/56"
          class="object-cover max-w-full max-h-full h-14 w-14 rounded-full block"
          alt="Foto de Perfil do Github"
        />
        <div>
          <h2 class="text-gray-200 text-xl/tight font-semibold">New Notification</h2>
          <p
            class="text-gray-200 text-base font-normal line-clamp-1 text-ellipsis overflow-hidden"
          >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
						dignissim, odio nec vehicula.
          </p>
        </div>
      </section>
        <div class="flex items-center gap-4">
        <div class="bg-gray-700 w-[1px] h-[76px]"></div>
        <button
          data-notification-id="${notificationId}"
          class="close-notification text-green-300 content-end text-xl justify-end font-semibold font-inter cursor-pointer hover:text-green-400"
        >
          Close
        </button
      </div>`;
  const closeNotificationButton = newNotificationContainer.querySelector(
    ".close-notification"
  );
  closeNotificationButton.addEventListener("click", (event) => {
    const notificationToRemove = document.getElementById(
      event.target.dataset.notificationId
    );
    if (notificationToRemove) {
      const animation = notificationToRemove.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
        {
          duration: 300,
          easing: "ease-in-out",
        }
      );
      // Remove the element after animation completes
      animation.onfinish = () => {
        notificationToRemove.remove();
      };
    }
  });
  // Lógica para animar a notificação ao abrir o modal
  newNotificationContainer.animate(
    [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }],
    {
      duration: 500,
      easing: "ease-in-out",
    }
  );

  // Fechar a notificação após 5 segundos
  setTimeout(() => {
    const notificationToRemove = document.getElementById(notificationId);
    if (notificationToRemove) {
      const animation = notificationToRemove.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
        {
          duration: 500,
          easing: "ease-in-out",
        }
      );
      animation.onfinish = () => {
        notificationToRemove.remove();
      };
    }
  }, 5000);
});
