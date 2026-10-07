// Ask before deleting a chat.
document.querySelectorAll(".wa-delete").forEach((form) => {
    form.addEventListener("submit", (event) => {
        if (!confirm("Delete this chat?")) {
            event.preventDefault();
        }
    });
});

// Live character counter for the message box (the schema allows 50).
document.querySelectorAll(".wa-counter").forEach((counter) => {
    const box = document.getElementById(counter.dataset.for);
    if (!box) return;
    const update = () => {
        counter.textContent = `${box.value.length} / ${box.maxLength}`;
    };
    box.addEventListener("input", update);
    update();
});
