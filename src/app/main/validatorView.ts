export class ValidatorView {
  static showSuccess(resultText: HTMLElement, message: string) {
    resultText.classList.remove("text-error");
    resultText.classList.add("text-success");
    resultText.textContent = message;
  }

  static showFailure(resultText: HTMLElement, message: string) {
    resultText.classList.remove("text-success");
    resultText.classList.add("text-error");
    resultText.textContent = message;
  }
}
